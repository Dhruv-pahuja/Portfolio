import { Router, Request, Response } from "express";
import Contact from "../models/contact";

const router = Router();

router.post('/contact/', async (req: Request, res: Response) => {
  try {
    await Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    return res.status(201).json({ message: 'Contact created successfully!' });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while creating the contact.' });
  }
});

export default router;
