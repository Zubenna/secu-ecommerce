const express = require('express');
const connectDB = require('./config/db');
// const session = require("express-session");
// const path = require("path");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/products');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config('.env');
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
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

// app.get("/", (req, res) => {
//   res.redirect("/api/cat");
// });

app.listen(process.env.PORT || 8080, () => {
  console.log(`app is listening on port ${process.env.PORT}`);
});

module.exports = app;
