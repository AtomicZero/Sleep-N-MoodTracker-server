import express from 'express';

import models from '../models';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});

const getAllsleepMoods = async (_, res) => {
  const sleepMoods = await models.sleepMood.find({});
  res.json({ sleepMoods });
};

const getWeekByID = async (req, res) => {
  const { weekID } = req.params;
  const sleepMood = await models.sleepMood.findById(weekID);
  res.json({ sleepMood });
};

const getDate = async (req, res) => {
  const { Date } = req.params;
  const sleepMood = await models.sleepMood.findOne({ Date });
  res.json({ sleepMood });
};

router.get('/sleepMoods', getAllsleepMoods);
router.get('/date', getDate);
router.get('/week/:id', getWeekByID);

export default router;
