import knex from 'knex';
import path from 'path'; // default do node, trabalha com paths

/**
 * Crio a conexão com o banco,
 *  dúvidas olhe a documentação do knex:
 *  http://knexjs.org/
 */
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});

export default connection;