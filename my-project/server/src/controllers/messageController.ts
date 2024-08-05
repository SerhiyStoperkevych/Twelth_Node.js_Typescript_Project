import { Request, Response } from 'express';
import Message, { IMessage } from '../models/message';

// Fetch all messages
export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find().exec();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'An error occurred while fetching messages' });
  }
};

// Create a new message
export const postMessage = async (req: Request, res: Response) => {
  const { title, text, dueDate, priority, completed } = req.body;

  if (!title || !text) {
    return res.status(400).json({ error: 'Title and text are required' });
  }

  const validPriorities: Array<IMessage['priority']> = ["Low", "Medium", "High"];
  if (!validPriorities.includes(priority)) {
    return res.status(400).json({ error: 'Invalid priority' });
  }

  try {
    const newMessage = new Message({
      title,
      text,
      dueDate,
      priority,
      completed: completed ?? false
    });

    await newMessage.save();
    res.status(201).json({ message: 'Message saved', newMessage });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'An error occurred while saving the message' });
  }
};

// Delete a message by ID
export const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Message.findByIdAndDelete(id).exec();

    if (!result) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'An error occurred while deleting the message' });
  }
};

// Update a message by ID
export const updateMessage = async (req: Request, res: Response) => {
  const messageId = req.params.id;
  const updatedMessageData: Partial<IMessage> = req.body;

  try {
    const updatedMessage = await Message.findByIdAndUpdate(messageId, updatedMessageData, { new: true }).exec();
    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error updating message', error);
    res.status(500).json({ error: 'An error occurred while updating the message' });
  }
};
