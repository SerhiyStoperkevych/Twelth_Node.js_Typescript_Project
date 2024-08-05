import { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import File from '../models/file';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export const uploadFile = upload.single('file');

export const handleFileUpload = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  try {
    const newFile = new File({
      originalName: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
    });
    await newFile.save();
    res.status(200).json(newFile);
  } catch (error) {
    const err = error as Error; // Type assertion
    res.status(500).json({ message: err.message });
  }
};

export const getFileList = async (req: Request, res: Response) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    const err = error as Error; // Type assertion
    res.status(500).json({ message: err.message });
  }
};
