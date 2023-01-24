const express = require('express');
const mongoose = require('mongoose');
const clientControllers = require("./controllers/client-controller.js")

const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);

const PORT = 3000;

//api request
app.use("/client", clientControllers);

//HTTP error, 404 unable to locate website 
app.use((req, res) => { 
    res.status(404).send("Error 404! page Not Found");
});

//home root
app.get("/", (req, res) => {
    res.json({message: "Server started"})
  });

app.listen(PORT, () => {
    console.log(`REST API is up and running on PORT: ${PORT}`);

    mongoose.connect(`mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority`)
    .then(() => {
        console.log(`Connected to the MongoDB`);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });
});