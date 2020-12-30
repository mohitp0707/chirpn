const todolist = require('../Models/todo.js');
var multer = require('multer');

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
      return res.status(400).send({
      message: "Please fill all required field"
    });
    }
    const todo = new todolist(req.body);
    todo.save()
      .then(data => {
      res.send({status:200,message:"saved successfully",data});
    }).catch(err => {
        console.log(err.code);
       if(err.code===11000){
        res.status(500).send({
            message: "Task already exist"
          });
       }else{
        res.status(500).send({
            message: err.message || "Something went wrong while creating new task."
          });
       }
     
    });
};

exports.findAll = (req, res) => {
  todolist.find()
      .then(todolist => {
      res.send({status:200,todolist});
    }).catch(err => {
      res.status(500).send({
      message: err.message || "Something went wrong while getting list of todolist."
    });
    });
    };

    exports.update = (req, res) => {
        // Validate Request
        if(!req.body) {
          return res.status(400).send({
          message: "Please fill all required field"
        });
        }
        todolist.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(todo => {
         if(!todo) {
           return res.status(404).send({
           message: "task not found with id " + req.params.id
         });
        }
        res.send({status:200,message:"update successfully",todo});
        }).catch(err => {
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
          message: "task not found with id " + req.params.id
        });
        }

            return res.status(500).send({
                message: "Error updating task with id " + req.params.id
              })

        });
        };
    
        exports.delete = (req, res) => {
          todolist.findByIdAndRemove(req.params.id)
            .then(todo => {
            if(!todo) {
              return res.status(404).send({
              message: "task not found with id " + req.params.id
            });
            }
            res.send({message: "task deleted successfully!"});
            }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
              message: "task not found with id " + req.params.id
            });
            }
            return res.status(500).send({
              message: "Could not delete task with id " + req.params.id
            });
            });
    };
