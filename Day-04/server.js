const express = require('express');
const connectToDB = require('./src/db/db');

connectToDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post('/notes', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});