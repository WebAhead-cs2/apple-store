const express = require("express");
var path = require("path");
const db = require("./dataBase/connection.js");
const PORT = 4500;
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const crypto = require("crypto");
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.post('/signup', (req, res) => {

  console.log(req.body.password);
  console.log(req.body.email);
  console.log(req.body.name);

  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  
  const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
  const values = [req.body.name, req.body.email, req.body.password];


  db.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred' });
    }
    res.json({ success: true });
  });
});


app.get('/products',async (req,res)=>{
   let data = await db.query("SELECT * FROM products");
   res.json(data.rows);


});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
