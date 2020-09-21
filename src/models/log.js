import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  actualSleepHours: {
    type: Number,
    required: true,
  },
  mood: {
    type: String,
    enum: ['cranky', 'tired', 'meh', 'okay', 'energized'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const log = mongoose.model('Log', schema);

export default log;
