import { Router } from 'express';
import { searchStudent } from '../controllers/studentController';

const router = Router();

router.get('/search', searchStudent);

export default router;
