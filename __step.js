// step 1
// there have 5 steps to make a server
//link : https://expressjs.com/en/starter/hello-world.html
//--------------------------------------------------
// const express = require('express');
// const app = express();
// const port = 5000;
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.listen(port, () => {
//     console.log(`Curd server is on running port ${port}`)
//   })
//---------------------------------------------------------------




//   step 2
//  goto mongodb click a database click connect then copy and past
//----------------------------------------------------------------
// const { MongoClient, ServerApiVersion } = require('mongodb');
// //admin //m.k.i.r.
// const uri = "mongodb+srv://admin:<password>@cluster0.rzbvd.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function run() {
//     try{
//         await client.connect();
//         const collection = client.db("notesTaker").collection("notes");
//         console.log("connected to db");
//     }
//     finally{

//     }
// }
// run().catch(console.dir);
//------------------------------------------
//client ar poriborte async use korbo
//-----------------------------------------------------------
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//     //   client.close();
//     console.log("connect to db");
// });


// step 3

// get api to read all notes 
//------------------------------------
// app.get('/notes',async(req,res)=>{
//     // console.log(req);
//     const q= req.query;
//     console.log(q);
//     const cursor = notesCollection.find({});
//     const result = await cursor.toArray()
//     res.send(result)
// })



// setp 4

//  //create notestaker
//-----------------------------------------------
//  app.post('/note',(req,res)=>{
//     const data= req.body
//     console.log(data);
//     res.send("hello from post data")
// });
//------------------------------------------------
// post method a req.body paoya jay na tai middleware  use kora hoy
//middleware -------------------------------------
// const cors = require('cors');
// app.use(cors())
// app.use(express.json());
//----------------------------------------------------



//step 5
 //create notestaker
        // http://localhost:5000/note
        //-------------------------------------------------------
        // app.post('/note',async(req,res)=>{
        //     const data= req.body
        //     console.log(data);
        //     const result = await notesCollection.insertOne(data)
        //     res.send(result)
        // })
//--------------------------------------------


// step 6

//update notesTaker
//--------------------------------------------------
// app.put('/note/:id',async(req,res)=>{
//     const id= req.params.id;
//     const data = req.body;
//     // console.log("from put method",id);
//     console.log("from update method",data);
//     // create a filter for a note to update
//     const filter = { _id: ObjectId(id)};
//       // this option instructs the method to create a document if no documents match the filter
//     const options = { upsert: true };
//     const updateDoc = {
//         $set: {
//             username: data.username, 
//             textdata: data.textdata,

//         },
//       };

//       const result = await notesCollection.updateOne(filter, updateDoc, options);
//     res.send(result)
// })
//----------------------------------------------





//step 7

 //delete note
 //---------------------------------------------
//  app.delete('/note/:id',async(req,res)=>{
//     const id = req.params.id;
//     const filter = {_id: ObjectId(id)};
//     const result = await notesCollection.deleteOne(filter);
//     res.send(result);
// })
//--------------------------------------