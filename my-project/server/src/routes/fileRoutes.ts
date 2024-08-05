import { Router } from 'express';
import { handleFileUpload, getFileList } from '../controllers/fileController';

const router = Router();

router.post('/upload', handleFileUpload);
router.get('/files', getFileList);

export default router;
