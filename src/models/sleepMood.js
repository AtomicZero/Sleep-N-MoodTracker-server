import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  // is USER input
  // weekID: {
  //   type: Date,
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
  mood: {
    type: String,
    enum: ['cranky', 'tired', 'meh', 'okay', 'energized'],
    required: true,
  },
  sleepGoal: {
    type: Number,
    required: true,
  },
  // is Calulation
  sleepHoursAverage: {
    type: Number,
    required: true,
  },
  moodAverage: {
    type: String,
    required: true,
  },
  weekCompleted: {
    type: Boolean,
  },
  // is unseen system track
  logDate: {
    type: Date,
    required: true,
  },
});

const sleepMood = mongoose.model('sleepMood', schema);

export default sleepMood;
