import { Request,Response } from "express"
import {ITable} from '../interfaces/table.interface'
import Table, {SavedTableDocument} from '../schemas/table.schema';


export const createTable = (req: Request, res: Response) => {
    const newTable: ITable = {
        number: req.body.number,
        capacity: req.body.capacity,
        isSplitable: req.body.splitable,
    }
    Table.create(newTable).then((data: SavedTableDocument) => {
        res.status(200).json(data)
        
    }).catch((error: Error) => {
        res.status(500).send(error)
      });
}
export const updateTable = (req: Request, res: Response) => {
    res.send("item")
}
export const getAvailableTable = (req: Request, res: Response) => {
    res.send("item")
}
export const getTable = (req: Request, res: Response) => {
    res.send("item")
}
export const deleteTable = (req: Request, res: Response) => {
    res.send("item")
}