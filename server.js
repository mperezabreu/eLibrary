const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

const app = express();

//Bodyparser Middleware

app.use(express.json());

//Database config
const db = config.get("mongoURI");

// Connecto to DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Conectado"))
  .catch(err => console.log("err"));

//Routes
//Books
app.use("/api/books", require("./routes/api/books"));
//Users
app.use("/api/users", require("./routes/api/users"));
//Auth
app.use("/api/auth", require("./routes/api/auth"));

//Serve static assets if in production.

if(process.env.NODE_ENV == 'production'){
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Conexion exitosa al servidor en puerto: ${port}`)
);
