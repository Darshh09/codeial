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

// check if the user is authenticated 
passport.checkAuthentication = (req, res, next) => {
    // if the user is signed in, then pass onn to tht next function(controller's action)

    if(req.isAuthenticated()){
        return next();
    }

    // if user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = (req, res, next) =>{
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;