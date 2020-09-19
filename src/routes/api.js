import express from 'express';

import models from '../models';

const router = express.Router();

const getAllSleepMoods = async (req, res) => {
  console.log(req.user);
  const sleepMoods = await models.sleepMood.find({});
  res.json({ sleepMoods });
};

const getWeekByID = async (req, res) => {
  const { weekID } = req.params;
  const sleepMoodWeek = await models.sleepMood.findById(weekID);
  res.json({ sleepMoodWeek });
};

const getDate = async (req, res) => {
  const { Date } = req.params;
  const sleepMoodDate = await models.sleepMood.findOne({ Date });
  res.json({ sleepMoodDate });
};

router.get('/sleepMoods', getAllSleepMoods);
router.get('/date', getDate);
router.get('/week/:id', getWeekByID);

// GET Route for /plans (use populate true config here to get associated logs)
// GET Route for /plans/:id (use populate true config here to get associated logs)

export default router;
