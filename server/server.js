const express = require("express");
var path = require("path");
const db = require("./dataBase/connection.js");
const crypto = require("crypto");
const PORT = 5000;
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));




app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


