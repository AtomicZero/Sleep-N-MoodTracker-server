import mongoose from 'mongoose';

const monId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb1c');
const tueId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb1d');
const wedId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb1e');
const thuId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb1f');
const friId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb20');
const satId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb21');
const sunId1 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb22');

const monId2 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb23');
const tueId2 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb24');
const wedId2 = mongoose.Types.ObjectId('5f65d6d23cd12381bb3bfb25');

const plans = [
  {
    title: 'Plan 1',
    desiredHours: 40,
    weekCommencing: new Date(),
    status: 'COMPLETE',
    createdAt: new Date(),
    logs: [
      monId1,
      tueId1,
      wedId1,
      thuId1,
      friId1,
      satId1,
      sunId1,
    ],
  },
  {
    title: 'Plan 2',
    desiredHours: 30,
    weekCommencing: new Date(),
    status: 'INCOMPLETE',
    createdAt: new Date(),
    logs: [
      monId2,
      tueId2,
      wedId2,
    ],
  },
];

export default plans;
