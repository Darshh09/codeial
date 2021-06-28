const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password: {
       type: String,
       required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    Age :  {
        type: String,
        required: true
    }
});

const userSignup = mongoose.model('Sign-Up', signupSchema);

module.exports = userSignup;