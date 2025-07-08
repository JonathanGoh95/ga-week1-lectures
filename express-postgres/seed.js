import { Pool, Client } from "pg";
const connectionString =
  "postgresql://neondb_owner:npg_FCdSrvGW6K0c@ep-calm-dream-a1dagoq9-pooler.ap-southeast-1.aws.neon.tech/music?sslmode=require";

// const pool = new Pool({
//   connectionString,
// });

// await pool.query("SELECT NOW()");
// await pool.end();

const pool = new Pool({ connectionString });

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const client = await pool.connect();

// const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
// console.log(res.rows[0].message); // Hello world!

const fetchQuery = {
  // give the query a unique name
  name: "fetch-musicians",
  text: "SELECT * FROM musicians",
};

const createQuery = {
  // give the query a unique name
  name: "create-musician",
  text: "INSERT INTO musicians (band_id, name, age, sings, dances) VALUES ($1,$2,$3,$4,$5) RETURNING *",
  values: [3, "Jane", 32, true, true],
};

const deleteQuery = {
  // give the query a unique name
  name: "delete-last-musician",
  text: "DELETE FROM musicians WHERE id = (SELECT MAX(id) FROM musicians) RETURNING *",
};

const res = await client.query(deleteQuery);
console.log(res.rows);

await client.end();
