import { Request,Response } from "express"
import Item, { IItem } from '../models/item.schema';


export const getItem = (req: Request, res: Response) => {
    res.send("item")
}
export const createItem = (req: Request, res: Response) => {

    Item.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then((data: IItem) => {
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
