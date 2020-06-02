import { Request, Response } from 'express';
import conn from '../database/connection';


class ItemsController{
    async index (request: Request, response: Response){
        let items = await conn('items').select('*');
        let serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        });

        response.json(serializedItems);
    }
}

export default ItemsController;