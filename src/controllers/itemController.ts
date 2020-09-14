import { Request,Response } from "express"
import MenuItem, {SavedItemDocument} from '../schemas/item.schema';
import { Item } from '../interfaces/item.interface'


export const getItem = (req: Request, res: Response) => {
    res.send("item")
}
export const createItem = (req: Request, res: Response) => {
    const newItem: Item = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    }
    MenuItem.create(newItem).then((data: SavedItemDocument) => {
        res.status(200).json(data)
        
    }).catch((error: Error) => {
        throw error;
      });
}
export const updateItem = (req: Request, res: Response) => {
    res.send("update item")
}
export const deleteItem = (req: Request, res: Response) => {
    res.send("delete item")
}
