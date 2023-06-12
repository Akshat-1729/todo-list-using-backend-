const mongoose=require('mongoose');
const todo_schema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:false
    },
    category:{
        type:String,
        required:true
    }
});
const Todo=mongoose.model('todo',todo_schema);
module.exports=Todo;