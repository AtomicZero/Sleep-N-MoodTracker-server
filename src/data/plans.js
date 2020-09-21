import mongoose from 'mongoose';

// Replace with user ID on your ROBO 3T
const userId = '5f67b8ff427316cd65476460';

// Replace log ids with your log IDs on ROBO3T
const plan1Logs = [
  mongoose.Types.ObjectId('5f67b8ff427316cd6547645e'),
  mongoose.Types.ObjectId('5f67b8ff427316cd6547645f'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476460'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476461'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476462'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476463'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476464'),
];

// Replace log ids with your log IDs on ROBO3T
const plan2Logs = [
  mongoose.Types.ObjectId('5f67b8ff427316cd65476465'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476466'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476467'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476468'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476469'),
  mongoose.Types.ObjectId('5f67b8ff427316cd6547646a'),
  mongoose.Types.ObjectId('5f67b8ff427316cd6547646b'),
];

const plans = [
  {
    title: 'Plan 1',
    desiredHours: 40,
    weekCommencing: new Date('2020-09-07T00:00:00'),
    status: 'COMPLETE',
    createdAt: new Date('2020-09-07T00:00:00'),
    logs: plan1Logs,
    userId,
  },
  {
    title: 'Plan 2',
    desiredHours: 30,
    weekCommencing: new Date('2020-09-14T00:00:00'),
    status: 'COMPLETE',
    createdAt: new Date('2020-09-14T00:00:00'),
    logs: plan2Logs,
    userId,
  },
];

export default plans;
