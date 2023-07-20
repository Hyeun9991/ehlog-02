import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const port = process.env.PORT || 8123;

app.listen(port, () => console.log(`Server is running on port ${port}`));