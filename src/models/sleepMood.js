import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  weekID: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  mood: [
    String,
  ],
  average: {
    type: Number,
  },
  weekCompleted: {
    type: Boolean,
  },
  sleepGoal: {
    type: Number,
    required: true,
  },
});

const sleepMood = mongoose.model('SleepMood', schema);

export default sleepMood;
