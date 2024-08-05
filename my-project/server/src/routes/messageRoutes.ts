import { Router } from 'express';
import { getMessages, postMessage, deleteMessage, updateMessage } from '../controllers/messageController';

const router = Router();

// Route to get all messages
router.get('/', getMessages);

// Route to create a new message
router.post('/', postMessage);

// Route to delete a message by ID
router.delete('/:id', deleteMessage);

// Route to update a message by ID
router.put('/:id', updateMessage);

export default router;
