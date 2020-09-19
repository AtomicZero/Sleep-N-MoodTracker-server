import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  // Things a user will have to input on the client when creating a plan
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
  // Things that get auto-generated when request is made on the server
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
  // Links log schema to Plan
  logs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Log',
    },
  ],
});

const plan = mongoose.model('Plan', schema);

export default plan;
