const db = require("../database/dbConfig.js")

function find(){
    return db("sales");
}

function findBy(id){
    return db("sales").where({id}).first()
}

function insert(sale){
    return db("sales").insert(sale)
}

function remove(id){
    return db("sales").where({id}).first().del()
}

module.exports = {
    find,
    insert,
    remove,
    findBy,
}