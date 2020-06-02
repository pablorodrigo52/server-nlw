import conn from '../database/connection';
import {Request, Response} from 'express';

class PointsController {
    async show(request: Request, response: Response){
        const { id } = request.params;

        const point = await conn('points').where('id', id).first();
        if (!point){
            return response.status(400).json({ message: 'Point not found'});
        } 
        
        let items = await conn('items')
            .join('point_items','items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');
        
        return response.json({point, items});
    }

    async create (request: Request, response: Response) {
        let { // desestruturando json
            name,
            email, 
            whatsapp, 
            latitude,
            longitude, 
            city,
            uf, 
            items
        } = request.body;
        
        let point = {
            image:'image-temp',
            name,
            email, 
            whatsapp, 
            latitude,
            longitude, 
            city,
            uf
        }
        let trx = await conn.transaction(); // cria uma transaction com rollback caso dê erro
        let insertedIds = await trx('points').insert(point);    
        let point_id = insertedIds[0];
        let pointItems = items.map((item_id: number) =>{
            return {
                item_id,
                point_id,
            }
        });
        await trx('point_items').insert(pointItems);
        await trx.commit();
        return response.json({
            id: point_id,
            ...point
        });
    }
}

export default PointsController;