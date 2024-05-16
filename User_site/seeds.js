const mongoose = require('mongoose');

const Emergency = require('./models/emergency')

mongoose.connect('mongodb://localhost:27017/crime')
    .then(() => {
        console.log('mongodb connected successfully');
    })
    .catch(err => {
        console.log('Error!!!');
        console.log(err);
    });

const p = new Emergency({
    name: 'Shaurya',
    age: 45,
    phone: '8923289322'
})
p.save()
    .then(p => {
        console.log(p);
    })
    .catch(err => {
        console.log(err);
    });