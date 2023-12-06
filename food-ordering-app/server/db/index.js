// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/food-ordering").catch((e) => {
//   console.error("Connection error", e.message);
// });

// const db = mongoose.connection;

// module.exports = db;

const CONFIG = {
  PORT: 8080,
  DB_URL: "mongodb://127.0.0.1:27017/food-ordering", //localhost = 127.0.0.1
};

module.exports = CONFIG;
