import express from 'express';

import models from '../models';

const router = express.Router();

const getPlans = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const results = await models.plan.find({ userId }).populate('logs');
    res.json({ results });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getPlan = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { id: planId } = req.params;
    const results = await models.plan.find({ _id: planId, userId }).populate('logs');
    res.json({ results });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getLogs = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const results = await models.log.find({ userId });
    res.json({ results });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getLog = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { id: logId } = req.params;
    const results = await models.log.find({ _id: logId, userId });
    res.json({ results });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const createPlan = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { title, weekCommencing, desiredHours } = req.body;
    const plan = {
      title,
      weekCommencing,
      desiredHours,
      createdAt: new Date(),
      status: 'INCOMPLETE',
      logs: [],
      userId,
    };
    const data = await models.plan.create(plan);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

router.get('/plans', getPlans);
router.get('/plans/:id', getPlan);
router.post('/plans', createPlan);

router.get('/logs', getLogs);
router.get('/logs/:id', getLog);

export default router;
