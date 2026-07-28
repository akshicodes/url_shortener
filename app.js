require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
const port = process.env.PORT ||    3000;

connectDB();

app.use(express.json());
app.use("/", urlRoutes);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});


