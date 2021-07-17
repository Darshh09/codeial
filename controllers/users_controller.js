const User = require('../models/users');

module.exports.profile = function(req, res){
  return res.render('user_profile', {
       title : "Profile"
   })
}

module.exports.signUp = function(req,res){
  return res.render('user_sign_up', {
    title: "Codial | Sign-Up"
  });
}

module.exports.signIn = (req, res)=>{
  return res.render('user_sign_in', {
    title: "Codial | Sign-In"
  });
}

// get the sign up data

module.exports.create = (req, res) => {
  if( req.body.password != req.body.confirm_password){
    return res.redirect('back');
  }

  User.findOne({email: req.body.email}, (err, user) => {
    if(err){ console.log('error in finding the user in signing up'); return }

    if(!user){
      User.create(req.body, function(err, user){
        if(err) {console.log('error in creating user while signing up', err); return}
        return res.redirect('/users/sign-in');
      })
    }
    else{
      return res.redirect('back');
    }
  });
}

// sign in and create a session for user
module.exports.createSession = (req, res) =>{
  // TODO Later
}