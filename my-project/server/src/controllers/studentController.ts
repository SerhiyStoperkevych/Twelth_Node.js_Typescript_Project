import { Request, Response } from 'express';
import Student from '../models/student';

export const searchStudent = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;
        const student = await Student.find({
            $or: [
                { name: new RegExp(query as string, 'i') },
                { email: new RegExp(query as string, 'i') },
                { phone: new RegExp(query as string, 'i') }
            ]
        });
        res.json(student);
    } catch (err) {
        const error = err as Error;
        return res.status(500).json({ error: error.message });
    }
};
