const express = require("express");
const connectDB = require("./config/db");
// const session = require("express-session");
// const path = require("path");
const category = require("./routes/cat");
const subCategory = require("./routes/subCat");
const product = require("./routes/products");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config(".env");
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(express.static("uploads"));
// app.use(cors());
// app.use(cookieParser());

app.use("/api/cat", category);
app.use("/api/subcat", subCategory);
app.use("/api/product", product);


app.get("/", (req, res) => {
  res.redirect("/api/cat");
});

module.exports = app;