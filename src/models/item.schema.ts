
import mongoose, { Schema, Document } from 'mongoose';

export interface IItem extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

const ItemSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

// Export the model and return your IUser interface
export default mongoose.model<IItem>('Item', ItemSchema);