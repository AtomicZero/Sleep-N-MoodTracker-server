import mongoose from 'mongoose';

import models from '../models';
import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import logs from '../data/logs';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

models.log.deleteMany({})
  .then(() => models.log.collection.insertMany(logs))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
