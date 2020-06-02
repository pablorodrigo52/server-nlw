import express from 'express';

const routes = express.Router(); // exporto somente o módulo de rotas do express para essa variável
routes.use(express.json()); //é a forma com a qual o corpo das requisições será entendido

routes.get('/', (request, response)=>{
    return response.json({message : 'Hello World'});
});

export default routes; // então "retorno routes"