const express =  require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})
app.get('/info', (req, res) => {
    res.render('login.ejs');
})

app.post('/info', async (req, res, next) => {
    console.log(req.body.emergency);
    const newEmergency = new Emergency(req.body.emergency);
    await newEmergency.save();
    res.redirect('info');
});

app.listen(8000, ()=>{
    console.log('Shaurya'); 
})