import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  // Things a user will have to input on the client when creating a log
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
  // Things that get auto-generated when request is made on the server
  logDate: {
    type: Date,
    required: true,
  },
  // is Calulation
  // sleepHoursTotal: {
  //   type: Number,
  //   required: true,
  // },
  // moodAverage: {
  //   type: String,
  //   required: true,
  // },
  weekCompleted: {
    type: Boolean,
  },
});
const log = mongoose.model('log', schema);
export default log;
