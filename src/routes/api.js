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

const getLogs = async (req, res) => {
  const { id: userId } = req.user;
  const results = await models.log.find({ userId });
  res.json({ results });
};

const getLog = async (req, res) => {
  const { id: userId } = req.user;
  const { id: logId } = req.params;
  const results = await models.log.find({ _id: logId, userId });
  res.json({ results });
};

router.get('/plans', getPlans);
router.get('/plans/:id', getPlan);

router.get('/logs', getLogs);
router.get('/logs/:id', getLog);

export default router;
