const express = require('express');
const  cors =require ('cors');
const connectDB = require('./db/index');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Server is ready')

})

app.post('/usersdata', async (req,res)=>{
    console.log('user info request');

    data= req.body;

    const db = await connectDB();

    const userData = await db.collection('usersdata').insertOne({
        username: "Aditya",
        email:"a@expense.com",
        password:"123214"
    });
    console.log(userData);
    res.send('user added successfully!!')
    res.json(userData)
    res.end();
})

app.get('/usersdata', async(req,res)=>{
    const db = await connectDB();
    const data =  await db.collection('userdata').find().toArray();

    res.json(data)
    res.end();
});


app.listen(port,()=>{
    console.log(`Server started at ${port} PORT.`);
})