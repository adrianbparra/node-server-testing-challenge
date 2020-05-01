const express = require("express");
const server = express();

const salesServer = require("./sales/salesServer.js");


server.use("/api/sales", salesServer);
server.use(express.json());

server.get("/", (req,res) =>{
    res.status(200).json({api: "up"})
});




module.exports = server;