
const express = require('express');
const logger = require("morgan");
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
app.use(logger('dev'));
app.use(apiRoutes);
app.use(htmlRoutes)


app.listen(PORT, () => {
    console.log(`App running successfully on port ${PORT}!`);
});