const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
mongoose.set("strictQuery", false);

const PORT = 3000;
const clientControllers = require("./users-controllers/client-controller.js")

//home root
app.get("/", (req, res) => {
  res.json({message: "Server started"})
});

//api request
app.use("/client",clientControllers)


app.listen(PORT, (req, res)=>{
    console.log(`REST API is up and running on PORT: ${PORT}`);

    mongoose.connect(`mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority`)
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