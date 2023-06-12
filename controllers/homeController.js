const Todo=require('../model/todo'); 
module.exports.home=function(req,res){
    Todo.find({}).
    then(function(lists){
        return res.render('home',{title: "TODO App",todo_tasks:lists});
    })
    .catch(function(err){
        console.log('error in fetching data from DB',err);
        return;
    });
};