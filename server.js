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
    const insertQuery = 'INSERT INTO referencepreference(firstName, lastName, email, age, area, education, acceptance1, reference1, acceptance2, reference2, acceptance3, reference3, acceptance4, reference4, acceptance5, reference5, acceptance6, reference6, acceptance7, reference7, acceptance8, reference8, acceptance9, reference9, acceptance10, reference10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26);'
    const values = [req.body.firstName, req.body.lastName, req.body.email, req.body.age, req.body.area, req.body.education, req.body.acceptance1, req.body.reference1, req.body.acceptance2, req.body.reference2, req.body.acceptance3, req.body.reference3, req.body.acceptance4, req.body.reference4, req.body.acceptance5, req.body.reference5, req.body.acceptance6, req.body.reference6, req.body.acceptance7, req.body.reference7, req.body.acceptance8, req.body.reference8, req.body.acceptance9, req.body.reference9, req.body.acceptance10, req.body.reference10];

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