const express = require('express');

const app = express();
const PORT = 8000;

// use express router

app.use('/', require('./routes'));

app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in  running the server: ${err}`);
    }

    console.log(`Server is running on port : ${PORT}`);
});