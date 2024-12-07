import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import {connectToMongoDB} from './src/config/database';

dotenv.config();

connectToMongoDB(process.env.MONGO_URI || '')
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
