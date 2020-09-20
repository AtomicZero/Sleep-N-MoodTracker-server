import mongoose from 'mongoose';

const plan1Logs = [
  mongoose.Types.ObjectId('5f67b8ff427316cd6547645e'),
  mongoose.Types.ObjectId('5f67b8ff427316cd6547645f'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476460'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476461'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476462'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476463'),
  mongoose.Types.ObjectId('5f67b8ff427316cd65476464'),
];

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
    userId: '5f62310c7a118504f889ab7b',
  },
  {
    title: 'Plan 2',
    desiredHours: 30,
    weekCommencing: new Date('2020-09-14T00:00:00'),
    status: 'COMPLETE',
    createdAt: new Date('2020-09-14T00:00:00'),
    logs: plan2Logs,
    userId: '5f624fb6d92740325b38a562',
  },
];

export default plans;
