const express = require('express');
const app = express();
const cookieParser = require('express');
const PORT = 8000;
const expressLayouts = require('express-ejs-layouts');
const DB = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assests'));

// we setup the layouts from library
app.use(expressLayouts);

//extract styles and scripts from subpages into the layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router

app.use('/', require('./routes'));

// set up the view engine

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in  running the server: ${err}`);
    }

    console.log(`Server is running on port : ${PORT}`);
});