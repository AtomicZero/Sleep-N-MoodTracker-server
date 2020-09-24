import express from 'express';
import moment from 'moment';

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
    const plan = await models.plan.findOne({ _id: planId, userId }).populate('logs');

    const data = plan.toJSON();

    res.json({
      results: {
        ...data,
        logs: data.logs.sort((a, b) => a.date - b.date),
      },
    });
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

const createLogForPlan = async (req, res) => {
  try {
    const { id: planId } = req.params;
    const { id: userId } = req.user;
    const {
      date, actualSleepHours, mood,
    } = req.body;

    const day = moment(date).format('dddd');

    const log = {
      day,
      date,
      actualSleepHours,
      mood,
      createdAt: new Date(),
      userId,
    };

    const newLog = await models.log.create(log);

    const { _id: logId } = newLog;
    const plan = await models.plan.findById(planId);
    plan.logs.push(logId);
    const newPlan = await plan.save();
    const data = await models.plan.populate(newPlan, 'logs');

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateLog = async (req, res) => {
  try {
    const { id: logId } = req.params;
    const {
      date, actualSleepHours, mood,
    } = req.body;

    const day = moment(date).format('dddd');

    const data = await models.log.findByIdAndUpdate(logId, {
      day, date, actualSleepHours, mood,
    }, { new: true });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteLogForPlan = async (req, res) => {
  try {
    const { planId, logId } = req.params;

    await models.log.findByIdAndDelete(logId);

    const plan = await models.plan.findById(planId);
    plan.logs = plan.logs.filter((each) => each._id !== logId);
    const newPlan = await plan.save();
    const data = await models.plan.populate(newPlan, 'logs');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

router.get('/plans', getPlans);
router.get('/plans/:id', getPlan);
router.post('/plans', createPlan);

router.get('/logs', getLogs);
router.get('/logs/:id', getLog);
router.put('/logs/:id', updateLog);
router.post('/plans/:id/logs', createLogForPlan);
router.delete('/plans/:planId/logs/:logId', deleteLogForPlan);

export default router;
