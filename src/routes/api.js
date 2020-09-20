import express from 'express';

import models from '../models';

const router = express.Router();

const getPlans = async (req, res) => {
  const { id: userId } = req.user;
  const results = await models.plan.find({ userId }).populate('logs');
  res.json({ results });
};

const getPlan = async (req, res) => {
  const { id: userId } = req.user;
  const { id: planId } = req.params;
  const results = await models.plan.find({ _id: planId, userId }).populate('logs');
  res.json({ results });
};

router.get('/plans', getPlans);
router.get('/plans/:id', getPlan);

export default router;
