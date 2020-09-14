import express, {Request, Response, NextFunction} from "express"
import mongoose from "mongoose"

import * as itemController from "./controllers/itemController"
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

const port = 3000
app.listen(port,() => {
    console.log(`server started on port ${port}`)
})