
const express = require("express");
const path = require('path');
const morgan = require('morgan');

const app = express();

const routes = require('./routes/rutas');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, '/public/')));

//routes
app.use('/', routes);

//server
app.listen(app.get('port'), ()=>{
     console.log(`Server on port ${app.get('port')}`);
});