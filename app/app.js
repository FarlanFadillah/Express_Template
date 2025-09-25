const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const process = require('process');
const path = require('path');

// middlewares
const session = require('./middlewares/session.middleware');

const app = express();

// router imports
const sample_router = require('./routes/home.route');


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use(cors());
app.use(session); // use the session middleware for every request

// set the static folder (js/css)
app.use(express.static(path.join(__dirname, '../public/static')))

// set the view engine to render html
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', sample_router);


// global errors handler middleware
app.use((err, req, res, next)=>{
    res.status(400).send('Something Broke!')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port http://localhost:${process.env.PORT}`);
})

