"""
Token Generation:
    User Login: The user provides their credentials (username/password) to the server for authentication.
    Authentication: The server verifies the provided credentials. If they are correct, the server generates a JWT.
    JWT Creation: The server creates a JWT by encoding user information (such as user ID, username, and possibly roles or permissions) into a JSON payload. This payload is digitally signed using a secret key known only to the server.
    Encrypted Token: The server encrypts the JWT with its secret key, producing the final encrypted token.

Token Inclusion in HTTP Requests:
    Token Issuance: After successful login, the server sends the encrypted JWT back to the client.
    Token Storage: The client typically stores the JWT in local storage or a cookie for later use.
    HTTP Requests: When the client needs to access protected resources on the server, the JWT is included in the HTTP headers of the request.

Token Verification and Authentication:
    HTTP Request with Token: The client sends an HTTP request to the server, including the JWT in the Authorization header.
    Token Extraction: Upon receiving the request, the server extracts the JWT from the Authorization header.
    Token Decryption: The server decrypts the JWT using its secret key, verifying its authenticity. If the decryption is successful, the server obtains the JSON payload.
    User Authentication: The server verifies the claims within the JSON payload to authenticate the user. This typically involves checking if the user exists, if they have the required permissions, and if the token has not expired.
    Access Granted: If the token is valid and the user is authenticated, the server grants access to the requested resource or performs the requested action.
"""

# Import the 'Flask' class from the 'flask' library.
from flask import Flask, jsonify, request, g
# To enable access of .env file
from dotenv import load_dotenv
# Import Authentication Middleware
from auth_middleware import token_required
import os
load_dotenv()
import jwt
# For password hashing, similar concept to Express
import bcrypt
# For managing database connections
import psycopg2, psycopg2.extras

# Initialize Flask (Mandatory)
# We'll use the pre-defined global '__name__' variable to tell Flask where it is.
app = Flask(__name__)

# Define our route
# This syntax is using a Python decorator, which is essentially a succinct way to wrap a function in another function.
@app.route('/')
def index():
    return "Hello, world!"

def get_db_connection():
    connection = psycopg2.connect(host='localhost',
                            database='flask_auth_db',
                            user=os.getenv('POSTGRES_USERNAME'),
                            password=os.getenv('POSTGRES_PASSWORD'))
    return connection

password = b"super secret password"
# Hash a password for the first time, with a randomly-generated salt
hashed = bcrypt.hashpw(password, bcrypt.gensalt())
# Check that an unhashed password matches one that has previously been
# hashed
if bcrypt.checkpw(password, hashed):
    print("It Matches!")
else:
    print("It Does not Match!")

# Signing (Encoding) of Token
@app.route('/sign-token', methods=['GET'])
def sign_token():
    user = {
        "id": 1,
        "username": "test",
        "password": "test"
    }
    # Standard way to encode user details with JWT key and the stated algorithm
    token = jwt.encode(user, os.getenv('JWT_SECRET'), algorithm="HS256")
    # return the token
    return jsonify({"token": token})

    # return jsonify(user)
    # return jsonify({ "message": "You are authorized!"})
    # jsonify is equivalent to JSON Stringify (Converting Data Structures into JSON)

# Verification (Decoding) of Token
@app.route('/verify-token', methods=['POST'])
def verify_token():
    try:
        # Same way as used in Express to retrieve the token without the 'Bearer' term
        token = request.headers.get('Authorization').split(' ')[1]
        decoded_token = jwt.decode(token, os.getenv('JWT_SECRET'), algorithms=["HS256"])
        return jsonify({"user": decoded_token})
    
        # return jsonify({"token": token})
        # return jsonify({"message": "Token is valid."})
    except Exception as err:
        return jsonify({"err": err.message})

@app.route('/auth/sign-up', methods=['POST'])
def sign_up():
    try:
        new_user_data = request.get_json()
        connection = get_db_connection()
        cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cursor.execute("SELECT * FROM users WHERE username = %s;", (new_user_data["username"],))
        existing_user = cursor.fetchone()
        if existing_user:
            cursor.close()
            return jsonify({"err": "Username already taken"}), 400
        hashed_password = bcrypt.hashpw(bytes(new_user_data["password"], 'utf-8'), bcrypt.gensalt())
        cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s) RETURNING id, username", (new_user_data["username"], hashed_password.decode('utf-8')))
        created_user = cursor.fetchone()
        connection.commit()
        connection.close()
        # Construct the payload
        payload = {"username": created_user["username"], "id": created_user["id"]}
        # Create the token, attaching the payload
        token = jwt.encode({ "payload": payload }, os.getenv('JWT_SECRET'))
        # Send the token instead of the user
        return jsonify({"token": token}), 201
    except Exception as err:
        return jsonify({"err": str(err)}), 401

@app.route('/auth/sign-in', methods=["POST"])
def sign_in():
    try:
        sign_in_form_data = request.get_json()
        connection = get_db_connection()
        cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cursor.execute("SELECT * FROM users WHERE username = %s;", (sign_in_form_data["username"],))
        existing_user = cursor.fetchone()
        cursor.close()
        if existing_user is None:
            return jsonify({"err": "Invalid credentials."}), 401
        password_is_valid = bcrypt.checkpw(
            bytes(sign_in_form_data["password"], 'utf-8'),
            bytes(existing_user["password"], 'utf-8')
        )
        if not password_is_valid:
            return jsonify({"err": "Invalid credentials."}), 401
        # Construct the payload
        payload = {"username": existing_user["username"], "id": existing_user["id"]}
        # Create the token, attaching the payload (Optional to put into a 'payload' object: {'payload': payload}, but will need the respective syntax when calling it)
        token = jwt.encode(payload, os.getenv('JWT_SECRET'))
        # Send the token instead of the user
        return jsonify({"token": token}), 200
    except Exception as err:
        return jsonify({"err": str(err)}), 500
    finally:
        if connection:
            connection.close()

@app.route('/users')
@token_required
def users_index():
    connection = get_db_connection()
    cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute("SELECT id, username FROM users;")
    users = cursor.fetchall()
    connection.close()
    return jsonify(users), 200

@app.route('/users/<user_id>')
@token_required
def user_index(user_id):
    # If the user is looking for the details of another user, block the request
    # Send a 403 status code to indicate that the user is unauthorized
    if int(user_id) != g.user["id"]:
        return jsonify({"err": "Unauthorized"}), 403
    connection = get_db_connection()
    cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute("SELECT id, username FROM users WHERE id = %s;", (user_id,))
    user = cursor.fetchone()
    connection.close()
    if user is None:
        return jsonify({"err": "User not found"}), 404
    return jsonify(user), 200

# Run our application, by default on port 5000
if __name__ == "__main__":
    app.run()
