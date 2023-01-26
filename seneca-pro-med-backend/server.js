const express = require('express');
const mongoose = require('mongoose');
const clientControllers = require("./controllers/client-controller.js");
const adminControllers = require("./controllers/admin-controller.js");
const driverControllers = require("./controllers/driver-controller.js");
const pharmaControllers = require("./controllers/pharma-controller.js");

const PORT = 3000;
const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);

//Home
app.get("/", (req, res) => {
    res.json({message: "Server started"});
});

//Routes 
app.use("/client", clientControllers);
app.use("/admin", adminControllers);
app.use("/driver",driverControllers);
app.use("/pharmacy", pharmaControllers);


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

//HTTP error, 404 unable to locate website 
app.use((req, res) => { 
    res.status(404).send("Error 404! page Not Found");
});