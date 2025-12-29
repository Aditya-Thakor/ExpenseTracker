const mongodb =require('mongodb') ;

const url = "mongodb+srv://adityagithub27x:Aditya%4027x@cluster0.uenvt9n.mongodb.net/"
const database = "ETTesting";

const client = new mongodb.MongoClient(url);


 async function connectDB(){
    try {
        await client.connect();
        const db= client.db(database);
        console.log('Connection Success!!!');
        return db;
    } catch (error) {
        console.log('Error at DB connection', error);
    }
}
// connectDB();
module.exports =connectDB;