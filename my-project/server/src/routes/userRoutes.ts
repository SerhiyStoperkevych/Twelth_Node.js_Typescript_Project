import { Router } from 'express';
import { loginUser, postUser, fetchUsers } from '../controllers/userController';

const router = Router();

router.post('/login', loginUser);
router.post('/', postUser);
router.get('/', fetchUsers);

export default router;
