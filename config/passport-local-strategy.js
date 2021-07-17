const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

// authentication using passport 
passport.use(new LocalStrategy({
    usernameField : 'email'
}, (email, password, done) => {
    // find a user and establish the identity
    User.findOne({email : email}, (err, user) => {
        if(err) {console.log("eError in finding User"); return done(err);}

        if(!User || user.password != password){
            console.log("Invalid Username/Password");
            return done(null, false);   
        }

        return done(null, user);
    });

}));

// Serializer the user to decide which key is to be kept in cookies
passport.serializeUser((user, done) =>{
    done(null, user.id);
})


// DeSerializer the user drom the key in the cookies
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if(err) {
            console.log(err);
            return done(err);
        }

        return done(null, user);
    })
})


module.exports = passport;