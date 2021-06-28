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
  // TODO Later
}

module.exports.createSession = (req, res) =>{
  // TODO Later
}