const express = require('express');
const mongoose = require('mongoose');
const MongoModel = require('./model/MongoModel')

const PORT = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));


async function start() {
    try {
        await mongoose.connect('mongodb+srv://root:Permesso1@cluster0-46db6.mongodb.net/test', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        const server = app.listen(PORT, () => {
            console.log(`server start on  port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();

//Routing
app.get('/', async(req, res) => {
    const dbJons = await MongoModel.find({})
    res.send(dbJons);
})

app.get('/create', async(req, res) => {
    const todo = new MongoModel({
        foto: 'Hello'
    })

    await todo.save();

    res.redirect('/');

})