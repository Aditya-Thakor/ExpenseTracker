const createFile = async(d,rdata)=>{
  
 const userTransactions = d[0].transactions;
  // console.log(userTransactions);
  const trReport = userTransactions.filter((t) =>
    rdata.from.length > 0
      ? new Date(t.date) <= new Date(rdata.to) &&
        new Date(t.date) >= new Date(rdata.from)
      : new Date(t.date) <= new Date(rdata.to)
  );
  
  // const trReport = userTransactions.filter((t)=> t.date.slice(0,10) <= rdata.to && t.date.slice(0,10) >= rdata.from)
  // console.log(trReport);
//  fs.writeFile("report.xls",'');
 
    const filePath= path.join(__dirname, "report.xls");
//  path.join(__dirname, "report.xls");
//     const filePath= "report.xls";
   
  console.log("function start sfdddfddf");
  await fs.appendFile(
    "report.xls",
    "Date \tDescription \tClass \tAmount\n",
    (error) => {
      if (error) return console.log("Error at creating the file!!", error);
      console.log("File created Successfully!!!");
       trReport.forEach( async (element) =>   {
         await fs.appendFile(
          "report.xls",
          `${element.date} \t${element.description} \t${
            element.type == "expense" ? element.category : element.incomeFrom
          } \t${element.amount}\n`,
          (error) => {
            if (error)
              return console.log("Error at creating the file!!", error);
            console.log("File created Successfully!!!");
          }
        );
      });
    }
    
  );
   console.log("File created successfully rrr!");

  // ✅ NOW this returns AFTER everything finishes
  return filePath;
}

app.post("/analytics/report/export-report", upload.none(), async (req, res) => {
  const rdata = req.body;
  // console.log("userdata",rdata);

  const db = await connectDB();
  const data = await db.collection("usersdata").find().toArray();
  var d = data.filter((t) => t._id == rdata.userid);
  // console.log("user report ");
  // console.log(d[0]);

 //const rsl = await createFile(d,rdata);  
    ///////////
    if(await createFile(d,rdata))
    {
      console.log("report-data");
    }
    else{
      console.log("errrrrrror")
    }
  
  // console.log(d[0].transactions);
//   const userTransactions = d[0].transactions;
//   // console.log(userTransactions);
//   const trReport =await userTransactions.filter((t) =>
//     rdata.from.length > 0
//       ? new Date(t.date) <= new Date(rdata.to) &&
//         new Date(t.date) >= new Date(rdata.from)
//       : new Date(t.date) <= new Date(rdata.to)
//   );
//   // const trReport = userTransactions.filter((t)=> t.date.slice(0,10) <= rdata.to && t.date.slice(0,10) >= rdata.from)
//   // console.log(trReport);
// //  fs.writeFile("report.xls",'');
//  path.join(__dirname, "report.xls");
//     const filePath= "report.xls";
// fs.writeFile(filePath, '', (err) => {
//   if (err) throw err;
//   console.log('File content cleared!');
// });
//   fs.appendFile(
//     "report.xls",
//     "Date \tDescription \tClass \tAmount\n",
//     (error) => {
//       if (error) return console.log("Error at creating the file!!", error);
//       console.log("File created Successfully!!!");
//       trReport.forEach((element) =>  {
//         fs.appendFile(
//           "report.xls",
//           `${element.date} \t${element.description} \t${
//             element.type == "expense" ? element.category : element.incomeFrom
//           } \t${element.amount}\n`,
//           (error) => {
//             if (error)
//               return console.log("Error at creating the file!!", error);
//             console.log("File created Successfully!!!");
//           }
//         );
//       });
//     }
//   );
  // res.setHeader(
  //   'Content-Type',
  //   'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  // );
  // res.setHeader(
  //   'Content-Disposition',
  //   'attachment;filename=report.xls'
  // );

  try {
    if (res) {   
      // res.setHeader(
      // "Content-Type",
      // "application/vnd.ms-excel"
      // );
      // res.setHeader(
      //     "Content-Disposition",
      //     "attachment; filename=report.xls"
      //   );
      // const filePath = "report.xls";
      console.log("download file..");
      
      const filePath=await path.join(__dirname, "report.xls");
       await res.download(filePath, "report.xls", (err) => {
          if (err) console.error("Download error:", err);
          //fs.unlinkSync(filePath); // cleanup
        });
    }     

  } catch (error) {
    console.log("error at downloading the report file...",error);
    
  }

  // res.setHeader(
  //     "Content-Type",
  //     "application/vnd.ms-excel"
  //   );
  //  res.setHeader(
  //     "Content-Disposition",
  //     "attachment; filename=report.xls"
  //   );
  //  const filePath = "report.xls";
  //   res.download(filePath, "report.xls", (err) => {
  //     if (err) console.error("Download error:", err);
  //     //fs.unlinkSync(filePath); // cleanup
  //   });
  //   path.join(__dirname, "report.xls");
  // res.send();
  // res.end(); 

  //  now, file downloaded successfully!!! but 1. we need the file in backend first!! thn we can download the file. 2. when we redownload the file, old data also comes with new data.
});
