import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import auth from './routes/auth';
import api from './routes/api';
import authenticateUser from './middlewares/authenticateUser';
import { PORT, DB_URI, MONGOOSE_OPTIONS } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/auth', auth);
app.use('/api', authenticateUser, api);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
