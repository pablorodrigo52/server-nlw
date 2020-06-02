import Knex from 'knex';

export async function up(knex: Knex) { // função para fazer alterações / criações, etc..
    // criar a tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title', 255).notNullable();
    });
}

export async function down(knex: Knex) { // rollback
    return knex.schema.dropTable('items');
}  