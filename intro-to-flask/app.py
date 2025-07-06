# app.py
# Installing pipenv Pipfile and Pipfile.lock requires this command in the terminal: python -m pipenv install flask
# Starting the env shell requires this command in the terminal: python -m pipenv shell
# Start the server with: python <filename>.py
# To exit, use this command in the terminal: exit

from flask import Flask
from flask import request
app = Flask(__name__)

personnel = {
    "rachel": "Executive Vice President of Managerial Functions",
    "wallace": "Senior Vice President of Managerial Functions",
    "rosie": "Staff Vice President of Managerial Functions",
    "james": "Vice Vice President of Managerial Functions",
    "henri": "Junior Vice President of Managerial Functions"
}

@app.route('/')
def index():
    return 'Hello Flask!'

@app.route('/information')
def info():
    return 'Flask is the micro-framework of choice for building Machine Learning API endpoints'

@app.route('/profile/<name>')
def profile(name):
    if name not in personnel:
        return 'There is no such person within our personnel directory.', 404
    return f"This is the profile information for {name.capitalize()}, who is a {personnel[name]}."

@app.route('/employee-search')
def employee_search():
    name = request.args.get('name')
    age = request.args.get('age')
    return f"I searched for an employee named {name}, who is {age} years old"
# These parameters follow the '?' symbol in the URL and are separated by '&'.
# Requires 'from flask import request' at the top of file
# Example: 'localhost:5000/employee-search?name=Christy&age=32'

if __name__ == '__main__':
    app.run()
