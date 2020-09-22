import mongoose from 'mongoose';

// Replace with user ID on your ROBO 3T
const userId = '5f68ec7922569324ecf0eade';

// Replace log ids with your log IDs on ROBO3T
const plan1Logs = [
  mongoose.Types.ObjectId('5f68ece52871133318cbfb46'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb47'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb48'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb49'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb4a'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb4b'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb4c'),
];

// Replace log ids with your log IDs on ROBO3T
const plan2Logs = [
  mongoose.Types.ObjectId('5f68ece52871133318cbfb4d'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb4e'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb4f'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb50'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb51'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb52'),
  mongoose.Types.ObjectId('5f68ece52871133318cbfb53'),
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
