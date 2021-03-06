const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 7000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
//passport libraries for authentication & authorization
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const MongoStore = require('connect-mongo');


const path = require('path');

app.use(express.urlencoded());

app.use(cookieParser());

// for using static files
app.use(express.static(path.join(__dirname,'./assets')))
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'HabitTracker',
    // TODO change the secret before deployment in production mode
    secret: 'Itsasecretekeyshhhh',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({ mongoUrl: "mongodb+srv://NavnathGunjal:sidharthgunjal@cluster0.fdrcp.mongodb.net/Habit_Tracker"}),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
