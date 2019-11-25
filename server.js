const express = require("express");
const mongoose = require("mongoose");
//const config = require("config");

const books = require("./routes/api/books");

const app = express();

//Bodyparser Middleware

app.use(express.json());

//Database config
const db = require("./config/configvar").mongoURI;

// Connecto to DB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Conectado"))
  .catch(err => console.log("err"));

//Routes
app.use("/api/books", books);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Conexion exitosa al servidor en puerto: ${port}`)
);
