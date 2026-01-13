const { error, log } = require('console')
require('dotenv').config();

const port = process.env.PORT;
console.log(`Server running on port ${port}`);

// const fs = require('fs')

// fs.writeFile('et.xls','React js \tNode js\nReact Demo\tNode demo', (error)=>{
//     if(error) return console.log("Error at creating the file!!",error);
//     console.log('File created Successfully!!!');        
// })

// fs.readFile('et.xls','utf-8',(error,data)=>{
//     console.log(data);    
// })

// data = fs.readFileSync("et.xls","utf-8");
// console.log(data);

// fs.readFile("et.xls","utf-8",(error,data)=>{
//     console.log(data);    
// })
