const express=require('express');
const port=8000;
const app=express();

//use express router
app.use('/',require('./routes'))

//setup the view engine
app.use('view engine','ejs');
app.use('view','./views');

app.listen(port,function(err){
    if(err){
        console.log("error in setting up server");
    }
    else{
        console.log(`server is running on port ${port}`);
    }
})