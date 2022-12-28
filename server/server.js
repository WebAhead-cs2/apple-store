const express = require("express");
var path = require("path");
const db = require("./dataBase/connection.js");
const PORT = 4500;
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("/", (req, res) => {
  
});

// app.get("*", (req, res) => {
//   console.log("*****");
//   res.sendFile(path.join(__dirname + "/../client/build/index.html"));
// });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

// server.post("/AddingProducts", async (req, res) => {
//   try {
//       const { name, brand, img, color, price, model } = req.body;
//       let json = await db.query(`INSERT INTO products (name, brand, img, color, price, model) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, brand, img, color, price, model])
//       res.json(json.rows);

//   }
//   catch (err) {
//       res.status(500).send(`<h1>${err}</h1>`);
//   }

// })
