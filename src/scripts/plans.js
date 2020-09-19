import mongoose from 'mongoose';

import models from '../models';
import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import plans from '../data/plans';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

models.plan.deleteMany({})
  .then(() => models.plan.collection.insertMany(plans))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
