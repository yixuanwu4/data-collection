import express from "express";
import pg from "pg";

const pool = new pg.Pool({
  user: 'yixuan',
  password: 'kittysMakeMeHappy',
  host: 'localhost',
  database: 'datacollection',
  port: 5432,
})

// setup express server
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.post('/process', function (req, res) {
    const insertQuery = 'INSERT INTO referencepreference(firstName, lastName, email, age, area) VALUES ($1, $2, $3, $4, $5);'
    const values = [req.body.firstName, req.body.lastName, req.body.email, req.body.age, req.body.area];

    pool.query(insertQuery, values).then(insertRes => {
      res.redirect('/success.html');
    }).catch(insertErr => {
      console.log(insertErr);
      console.log('Oh noo.. cats got lost :(');
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export default app;