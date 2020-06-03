import express from 'express';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router(); // exporto somente o módulo de rotas do express para essa variável
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.use(express.json()); //é a forma com a qual o corpo das requisições será entendido


/**
 * Um padrão da comunidade:
 *  index - para listagem;
 *  show - mostrar um único registro;
 *  create - criação;
 *  update - atualização;
 *  delete - remoção
 */

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes; // então "retorno routes"