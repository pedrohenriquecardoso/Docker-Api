const express = require('express');
const ConnectDB = require("./db/mongodb");
/* require('dotenv').config(); */
var cors = require("cors");
const produtos = require("./routes/produtos");

ConnectDB.conectarMongo();
const app = express();
app.use(express.json());
app.use(cors())
app.use("/produtos", produtos);

console.log("SERVIDOR INICIALIZADO")
app.listen(3000)