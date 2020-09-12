import mongoose from 'mongoose';

import models from '../models';
import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import sleepMoods from '../data/sleep-n-mood-seed';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

models.sleepMood.deleteMany({})
  .then(() => models.sleepMood.collection.insertMany(sleepMoods))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
