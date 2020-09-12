export const PORT = process.env.PORT || 8000;

export const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/sleep-n-mood-tracker-db';

export const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};
