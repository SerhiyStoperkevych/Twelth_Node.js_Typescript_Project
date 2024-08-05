import mongoose, { Document, Schema } from 'mongoose';

interface IFile extends Document {
  originalName: string;
  path: string;
  size: number;
}

const fileSchema: Schema<IFile> = new Schema({
  originalName: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
});

export default mongoose.model<IFile>('files', fileSchema);
