import express from 'express';
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    const hello = "Hello World!";
    res.json(hello);
})

app.listen(port, () => console.log("Sever Listening on port " + port));