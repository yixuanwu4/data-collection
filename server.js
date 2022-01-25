import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.post('/process', function (req, res) {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export default app;