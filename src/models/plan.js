import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desiredHours: {
    type: Number,
    required: true,
  },
  weekCommencing: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    enum: ['INCOMPLETE', 'COMPLETE'],
    required: true,
    default: 'INCOMPLETE',
  },
  logs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Log',
    },
  ],
  userId: {
    type: String,
    required: true,
  },
});

const plan = mongoose.model('Plan', schema);

export default plan;
