const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

dotenv.config();

const uri = process.env.URI;

const client = new MongoClient(uri);

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.get("/subscriptions", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("travel")
      .collection("subscriptions")
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/subscriptions", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("travel")
      .collection("subscriptions")
      .insertOne(req.body);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while processing your request",
      error,
    });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("travel").collection("bookings").find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/bookings", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("travel")
      .collection("bookings")
      .insertOne(req.body);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while processing your request",
      error,
    });
  }
});

app.listen(5000, () => {
  console.log("Servers started on port 5000");
});
