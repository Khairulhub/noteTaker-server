const express = require('express');
const app = express();
const port = 5000;
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const cors = require('cors');

//admin //m.k.i.r.

//middleware
app.use(express.json());
app.use(cors())


const uri = "mongodb+srv://admin:m.k.i.r.@cluster0.rzbvd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try{
        await client.connect();
        const notesCollection = client.db("notesTaker").collection("notes");
        console.log("connected to db");
        //get api to read all notes 
        //http://localhost:5000/notes
        app.get('/notes',async(req,res)=>{
            // console.log(req);
            const q= req.query;
            console.log(q);
            const cursor = notesCollection.find({});
            const result = await cursor.toArray()
            res.send(result)
        })

        /* body
        {
        "username":"khondoker",
        "textdata":"hello everybody"
        }
        */


        //create notestaker
        // http://localhost:5000/note
        app.post('/note',async(req,res)=>{
            const data= req.body
            console.log("from post method",data);
            const result = await notesCollection.insertOne(data)
            res.send(result)
        })


        //update notesTaker
        //http://localhost:5000/note/630f79903ac309bf082521ec
        app.put('/note/:id',async(req,res)=>{
            const id= req.params.id;
            const data = req.body;
            // console.log("from put method",id);
            console.log("from update method",data);
            // create a filter for a note to update
            const filter = { _id: ObjectId(id)};
              // this option instructs the method to create a document if no documents match the filter
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    username: data.username, 
                    textdata: data.textdata,

                },
              };

              const result = await notesCollection.updateOne(filter, updateDoc, options);
            res.send(result)
        })


        //delete note
        //http://localhost:5000/note/630f79903ac309bf082521ec
        app.delete('/note/:id',async(req,res)=>{
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const result = await notesCollection.deleteOne(filter);
            res.send(result);
        })
    }
    finally{

    }
}
run().catch(console.dir);



// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//     //   client.close();
//     console.log("connect to db");
// });









app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Curd server is on running port ${port}`)
})