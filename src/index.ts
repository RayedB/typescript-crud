import express, {Request, Response, NextFunction} from "express"
import mongoose from "mongoose"

import * as itemController from "./controllers/itemController"
import * as tableController from "./controllers/roomController"
export const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/typescript', {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true});

app.get("/",(req: Request, res: Response, next: NextFunction) => {
    res.json({message:"hello world"})
})


app.get('/items', itemController.getItem)
app.post('/items', itemController.createItem)
app.put('/items/:id', itemController.updateItem)
app.delete('/items/:id', itemController.deleteItem)

app.get('/tables', itemController.getItem)
app.post('/tables', tableController.createTable)
app.put('/tables/:id', itemController.updateItem)
app.delete('/tables/:id', itemController.deleteItem)

const port = 3000
app.listen(port,() => {
    console.log(`server started on port ${port}`)
})