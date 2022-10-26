const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/cinima', () => {
    console.log('connected to database');
})