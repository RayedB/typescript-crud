
import mongoose, { Schema, Document } from 'mongoose';
import { ITable } from '../interfaces/table.interface'

export interface SavedTableDocument extends Document, ITable{}

const TableSchema: Schema = new Schema({
    number: {type: Number, required: true, unique: true},
    capacity: {type: Number, required: true},
    isSplitable: {type: Boolean, default: false},
    isAvailable: {type: Boolean, default: false},
    seatedPatrons: {type: Number, default: 0}
});

// Export the model and return your IUser interface
export default mongoose.model<SavedTableDocument>('Table', TableSchema);