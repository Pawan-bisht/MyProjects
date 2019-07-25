const express = require("express");
const route  = express.Router();

let todos = [
    {
        task:"brush Your teath", 
        done:"completed"
    },
    {
        task:"Take a bath",
        done:"Not completed"
    }
]

route.get('/',(req,res)=>{
    res.send(todos);
})

route.post('/',(req,res)=>{
    todos.push({
        task:req.body.task,
        done:req.body.done
    })
    res.send(todos);
})

route.patch('/:id',(req,res)=>{
    todos[req.params.id] = {
        task:req.body.task,
        done:req.body.done
    }
    res.send(todos);
})
route.get('/:id',(req,res)=>{
    res.send(todos[parseInt(req.params.id) ]);
})

route.delete('/:id',(req,res)=>{
    if(todos[req.params.id]===undefined)
    {
        res.send("There is no element exist")
    }
    else
    {
        todos.splice(req.params.id,1);
        res.send(todos);
    }
})

module.exports = route;