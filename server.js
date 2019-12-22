const express = require('express');

const PORT = 4000;

const app = express();

const server = app.listen(PORT, () => {
    console.log(`server start on  port: ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})