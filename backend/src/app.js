const express = require("express");
const cors = require("cors");
const connectDB = require("./db/index");
const multer = require("multer");
const { ObjectId } = require("mongodb");
const app = express();
const upload = multer();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.post("/usersdata", upload.none(), async (req, res) => {
  console.log("user info request");

  const data = req.body;

  const db = await connectDB();

  const userData = await db.collection("usersdata").insertOne({
    username: data.username,
    email: data.email,
    password: data.password,
  });
  console.log(userData);
  res.send("user added successfully!!");
  res.json(userData);
  res.end();
});

app.get("/usersdata", async (req, res) => {
  const db = await connectDB();
  const data = await db.collection("usersdata").find().toArray();

  res.json(data);
  res.end();
});

// add transactions
app.post("/usersdata/transactions", upload.none(), async (req, res) => {
  // const data = req.body;
  console.log(req.body);
  const { type, amount, description, incomeFrom, category, date } = req.body;

  try {
    const db = await connectDB();
    const transaction = {
      _id: new ObjectId(),
      type,
      amount: Number(amount),
      description,
      incomeFrom,
      category,
      date: new Date(date),
    };
    const update = await db.collection("usersdata").updateOne(
      { _id: new ObjectId("693c0c7f7badfd7ae01a78be") },
      {
        $push: { transactions: transaction },
      }
    );

    res.send("transaction added successfully!!");
  } catch (error) {
    console.log("Error at adding transaction", error);
    throw error;
  }
});

app.get("/usersdata/transactions", async (req, res) => {
  const db = await connectDB();
  const data = await db.collection("usersdata").find().toArray();

  res.json(data);
  res.end();
});

app.listen(port, () => {
  console.log(`Server started at ${port} PORT.`);
});
