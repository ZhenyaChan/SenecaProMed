const MONGOOSE = require("mongoose");
const express = require("express");
const app = express();

MONGOOSE.set("strictQuery", false);

//let js to understand  json body, pass by postman
app.use(express.json());

const port = 3000;

//home root
app.get("/", (req, res) => {
  res.json({message: "Server started"})
});


const clientModel = require("./users-models/client-model.js");
app.post("/createClient", (req, res)=>{
    const clientUser = new clientModel(req.body);

    clientUser.save().then((newClientUser)=>{
        res.json({
            message: "client user is created",
            data : newClientUser
        })
    })
    .catch(err=>{
        console.log(`error ${err}`);
    });
})


//setup http server to listen on HTTP_PORT
app.listen(process.env.PORT, (req, res)=>{
    console.log(`listening on local host ${port}`);

    MONGOOSE.connect(`mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority`)
    .then(()=>{
        console.log(`Connected to the mongodb`);
    })
    .catch(err => {
        console.log(`Error ${err}`)
    });
});

//HTTP error, 404 unable to locate website 
app.use((req, res) => { 
    res.status(404).send("Error 404! page Not Found");
});


