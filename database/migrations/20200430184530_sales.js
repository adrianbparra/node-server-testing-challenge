
exports.up = function(knex) {
    return knex.schema.createTable("sales", table =>{
        table.increments("id");
        table.string("customer").notNullable();
        table.float("total").notNullable();
        
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("sales")
};
