import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
    name: string;
    email: string;
    phone: string;
}

const StudentSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true }
});

export default mongoose.model<IStudent>('student', StudentSchema);
