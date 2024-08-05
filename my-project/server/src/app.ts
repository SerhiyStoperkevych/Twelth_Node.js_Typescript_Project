import express, { Express } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import messageRoutes from './routes/messageRoutes';
import itemRoutes from './routes/itemRoutes';
import studentRoutes from './routes/studentRoutes';
import fileRoutes from './routes/fileRoutes';

const configureApp = (app: Express) => {
  app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }));
  app.use(express.json());

  // Define routes
  app.use('/users', userRoutes);
  app.use('/messages', messageRoutes);
  app.use('/items', itemRoutes);
  app.use('/student', studentRoutes);
  app.use('/files', fileRoutes);
};

export default configureApp;
