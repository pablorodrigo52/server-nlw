import express, { request, response } from 'express';

const app = express();

app.use(express.json()); //é a forma com a qual o corpo das requisições será entendido


// Rota: Endereço completo da requisição e.g: localhost:3333
// Recurso: qual entidade esta sendo acessada e.g: /hello

/*
Em API RESTFULL: 
    GET - Buscar informações do backend
    POST - Criar uma nova informação do backend
    PUT - Atualizar uma informação do backend
    DELETE - Remover alguma informação do backend
*/

/**
 * Exemplos:
 *  POST http://localhost:3333/users - criar um usuário
 *  GET http://localhost:3333/users - listar todos os usuários
 *  GET http://localhost:3333/users/5 - listar usuário de id=5
 */

/**
 *  Request Param: Parâmetros que vem na propria rota (/users/:id <==> request.params.id)
 *  Query Param: Parâmetros que vem na prorpia rota (/users?id=5 <==> request.query.id)
 *  Body Param: Parâmetros que vem no corpo da rota (POST <==> )
 */



let users = ['Pablo', 'Liliane', 'Rocketseat'];




app.get('/users', (request, response)=>{
    let search = String(request.query.search);

    let filteredUsers = (search) ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response)=>{
    let id = Number(request.params.id); // vem como string então converto para int

    return response.json(users[id]);
});

app.post('/users', (request, response) =>{
    let user = {
        name : request.body.name,
        email : request.body.email
    }
    return response.json(user);
});

app.listen(3333);