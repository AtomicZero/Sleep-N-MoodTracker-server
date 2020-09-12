import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';
import { PORT, DB_URI, MONGOOSE_OPTIONS } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', routes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
