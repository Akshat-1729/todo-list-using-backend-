const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todo_db');
const db=mongoose.connection;
db.on('error',console.error.bind('error in connecting to MongoDB'));
db.once('open',function(){
    console.log('successfully connected to database');
})
module.exports=db;