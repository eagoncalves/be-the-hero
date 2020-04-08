
exports.up = function(knex) {
  /** Craete a table */
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {
  /** Drop table in case of occurs same problem on table create */
  return knex.schema.dropTable('ongs');
};  
