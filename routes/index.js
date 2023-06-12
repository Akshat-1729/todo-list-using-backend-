const express=require('express');
const Todo=require('../model/todo');
const router=express.Router();
const homeController=require('../controllers/homeController');
console.log('router loaded');
router.use(express.urlencoded());
router.get('/',homeController.home); 
router.post('/addTask',function(req,res){
    Todo.create({
        task:req.body.description,
        date: req.body.date,
        category: req.body.categories,
        status:false
    })
    .then(newTask=>{
        console.log('********',newTask);
        return res.redirect('back');
    })
    .catch(err=>{
        console.log('error in adding task',err);
        return res.redirect('back');
    });
});
module.exports=router
