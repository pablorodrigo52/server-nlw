import Knex from 'knex';

export async function up(knex: Knex) { // função para fazer alterações / criações, etc..
    // criar a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) { // rollback
    return knex.schema.dropTable('points');
}  