const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { PORT, DB_URL } = require("./db");

const app = express();
const productRouter = require("./routes/productRouter");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
async function dbConnect() {
  await mongoose.connect(DB_URL);
}

dbConnect()
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch((err) => console.log(`Error while connecting to the DB. ${err}`));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/", productRouter);
