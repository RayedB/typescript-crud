
import mongoose, { Schema, Document } from 'mongoose';
import { Item } from '../interfaces/item.interface'

export interface SavedItemDocument extends Document, Item{}

const ItemSchema: Schema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: String,
    image: String
});

// Export the model and return your IUser interface
export default mongoose.model<SavedItemDocument>('menuItem', ItemSchema);