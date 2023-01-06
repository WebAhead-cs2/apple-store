const express = require("express");
var path = require("path");
const db = require("./dataBase/connection.js");
const PORT = 4500;
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  let email = req.body.email;
  const hash = crypto.createHash("sha256").update(req.body.password).digest("hex");
  
   db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, hash], function(error, result) {
    
      if (error) {
        return res.status(500).send();
      }
      if (result.rowCount == 0) {
        return res.status(401).json({error: "incorrect email or password"});
      }
      // req.session.user = result.rows[0];
      res.json(result.rows[0]);
    });
  });


app.post('/signup', (req, res) => {
  
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const hash = crypto.createHash("sha256").update(req.body.password).digest("hex");
  const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
  const values = [req.body.name, req.body.email, hash];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Email already exist' });
    }
    res.json({ success: true });
  });
});


app.get('/products',async (req,res)=>{
   let data = await db.query("SELECT * FROM products");
   res.json(data.rows);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
