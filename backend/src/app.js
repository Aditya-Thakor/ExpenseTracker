const express = require("express");
const cors = require("cors");
const connectDB = require("./db/index");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
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

// Login
app.post("/signin", upload.none(), async (req, res) => {
  const userdata = req.body;
  console.log(userdata);
  try {
    const db = await connectDB();
    const userLog = await db
      .collection("usersdata")
      .findOne({ email: userdata.email });

    if (!userLog) {
      return res.status(401).json({
        message: "Invelid email",
      });
    }

    if (userLog.password != userdata.password) {
      return res.status(401).json({ message: "Invelid Password" });
    }

    res.status(200).json({
      message: "Login Succesfull..",
      userLog,
    });
  } catch (error) {
    console.log("Invelid User", error);
  }
});

app.use("/profileImages", express.static(path.join(__dirname, 'profileImages')));

const uploadDir = path.join(__dirname,"profileImages");
if(!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir);
}

const storage= multer.diskStorage({
  destination: function (req,file,cb){
    cb(null, uploadDir);
  },
  filename: function(req,file,cb){
    cb(null, file.originalname);
  }
});

app.use("/categoryIcon", express.static(path.join(__dirname,"categoryIcon")));
const uploadIconDir = path.join(__dirname,"categoryIcon");
if(!fs.existsSync(uploadIconDir)){
  fs.mkdirSync(uploadIconDir);
}

const iconStorage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,uploadIconDir);
  },
  filename: function(req,file,cb){
    cb(null, file.originalname);
  }
});

const pfpUpload = multer({storage:storage});
const iconUpload = multer({storage:iconStorage});

app.post("/usersdata/user/editprofile", pfpUpload.single('file'), async (req, res) => {
  console.log(req.body);
  
  if(!req.file){  
    console.log('file not found');
    return res.status(400).send("No file uploaded");
  }
  const data = req.body;

  const address = {
    at:data.at,
    city: data.city,
    state: data.state,
    country: data.country,
    pincode: data.pincode
  }

console.log(req.body);
console.log(address);

  try {
    const db = await connectDB();
    const update = await db.collection("usersdata").updateOne(
      
      { _id: new ObjectId(data.userId) },
      {
        $set: {
          username: data.username,
          email: data.email,
          fullname: data.fullname,
          role: data.role,
          address: address,
          pfp:req.file.originalname
        },
      }
    );

    const updatedUser = await db.collection("usersdata").findOne({_id:new ObjectId(data.userId)})

    res.status(200).json({
      message: "User data Updated Successfully!!",
      updatedUser,
    });
  } catch (error) {
    console.error("error at updating userdata", error);
  }
});

// update password
app.post("/usersdata/user/updatepassword", upload.none(), async (req, res) => {
  const data = req.body
  console.log(data);
  try{
    const db= await connectDB();
    const updatePass = await db.collection("usersdata").updateOne(
      { _id: new ObjectId(data.userId) },
      {
        $set: { password: data.password },
      }
    );
    res.status(200).json({
      message:"Password changed successfull..",
      updatePass
    })
  }catch(error){
    console.log('error at changing password', error);
  }
  });

// add transactions
app.post("/usersdata/transactions", upload.none(), async (req, res) => {
  // const data = req.body;
  console.log(req.body);
  const { userId, type, amount, description, incomeFrom, category, date } = req.body;

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
      { _id: new ObjectId(userId) },
      {
        $push: { transactions: transaction },
      }
    );

    // res.send("transaction added successfully!!");
    res.status(200).json({
      message:"transaction added successfully!!",
      transaction
    })
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

// Category

app.post("/category/addcategory",upload.none() , async (req, res) => {
  console.log(req.body); //iconUpload.single('file')
  // if(!req.file){
  //   console.log('file not found');
  //   return res.status(400).send("No file uploaded");
  // }
  const data = req.body;

  try {
    const db = await connectDB();
    const categories = await db.collection("categories").insertOne({
      name: data.name,
      // icon: req.file.originalname,
      icon:data.icon,
      bgtype: data.bgType,
      color1: data.color1,
      color2: data.color2,
    });
    res.send("Category added successfully..");
    // res.json(categories);
  } catch (error) {
    console.log("Error at create Category ", error);
    throw error;
  }
  // res.end();
});

app.get("/categories", async (req, res) => {
  const db = await connectDB();
  const data = await db.collection("categories").find().toArray();

  res.json(data);
  res.end();
});

app.listen(port, () => {
  console.log(`Server started at ${port} PORT.`);
});
