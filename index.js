const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
app.use(express.static('assets'));
//use express router
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
// //setup the view engine
// app.use('view engine','ejs');
// app.use('view','./views');

app.listen(port,function(err){
    if(err){
        console.log("error in setting up server");
    }
    else{
        console.log(`server is running on port ${port}`);
    }
})