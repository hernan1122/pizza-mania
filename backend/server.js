const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'axel',
  database: 'pizzamania'
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO account (`name`, `lastname`, `email`, `password`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.lastname,
    req.body.email,
    req.body.password
  ]

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json('Error');
    }
    return res.json(data);
  })
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM account WHERE `email` = ? AND `password` = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json('Error');
    }
    
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Faile");
    }
  })
})

app.get('/comunity', (req, res) => {
  const sql = " SELECT name, lastname FROM account";

  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ error: err });
    }

    if (data.length) {
      const communityData = data.map(item => {
        return {
          name: item.name,
          lastname: item.lastname
        }
      });
      return res.json({ data: communityData });
    } else {
      return res.json({ error: "No hay datos disponibles" });
    }
  })
})

app.listen(8081, () => {
  console.log('listening connection, axel');
})