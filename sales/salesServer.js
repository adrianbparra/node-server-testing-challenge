const express = require("express");

const server = express.Router();

const salesDB = require("./salesModel.js")



server.get("/", (req,res)=>{

    salesDB.find()
        .then(sales =>{
            res.status(200).json(sales)
        })
        .catch(err => res.status(500).json(err))
    
})


server.get("/:id", (req,res) =>{
    const {id} = req.params;

    salesDB.findBy(id)
        .then(sale =>{
            
            if(sale){
                res.status(200).json(sale)
            } else {
                res.status(401).json({message: "No sale found"})
            }
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    
    
})



module.exports = server;