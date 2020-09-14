import { Request,Response } from "express"

export const getItem = (req: Request, res: Response) => {
    res.send("item")
}