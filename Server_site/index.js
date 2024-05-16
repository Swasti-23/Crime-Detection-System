const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const Emergency = require('./models/emergency')

mongoose.connect('mongodb://localhost:27017/crime')
    .then(() => {
        console.log('mongodb connected successfully');
    })
    .catch(err => {
        console.log('Error!!!');
        console.log(err);
    });

app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req, res) => {
    const emergencies = await Emergency.find({});
    res.render('home', { emergencies });
})

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const p = await Emergency.findById(id);
    res.render('show', { p });
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const p = await Emergency.findByIdAndDelete(id);
    res.redirect('/');
});

app.listen(3000, ()=>{
    console.log('Swasti');
})