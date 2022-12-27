import express from "express";
import { createConnection } from "mysql";
import bluebird from "bluebird";
const app = express();

/** Learning here Creating URLs / Endpoints */

/*  http://localhost:3000/  */
app.get("/", (req, res) => res.send("Hello!"));

/* GET / GIVE ME MESSAGE */
/*  http://localhost:3000/message  */
app.get("/message", (req, res) => {
  let message = { id: 1, message: "Hi", messageTime: new Date() };
  res.json(message);
});

/*  http://localhost:3000/messages  */
app.get("/messages/", async (req, res) => {
  let connectUri = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "cdac",
  };
  let connection = createConnection(connectUri);
  bluebird.promisifyAll(connection);

  await connection.connectAsync();

  // let sql = `SELECT * FROM message ORDER BY id DESC`;
  let sql = `SELECT * FROM message`;
  let results = await connection.queryAsync(sql);

  await connection.endAsync();

  res.json(results);
});

/*  POST / INSERT / ADD / CREATE NEW MESSAGE */
/*  http://localhost:3000/message  */
app.post("/message", async (req, res) => {
  let connectUri = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "cdac",
  };
  let connection = createConnection(connectUri);
  bluebird.promisifyAll(connection);

  await connection.connectAsync();

  let message = "Hello Node Mysql Bluebird!!";
  let reply = 0;

  let sql = `INSERT INTO message (message, reply) VALUES ('${message}', ${reply})`;
  await connection.queryAsync(sql);

  connection.endAsync();

  res.json({ msg: "Record added!" });
});

app.listen(3000);