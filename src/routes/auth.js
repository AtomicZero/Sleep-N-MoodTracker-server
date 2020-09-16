import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models';
import { AUTH_SECRET } from '../config';

const router = express.Router();

const validate = (body) => {
  const {
    firstName, lastName, email, password,
  } = body;
  const isValid = firstName && lastName && email && password;
  return isValid;
};

const registerUser = async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  if (validate(req.body)) {
    const user = await db.user.findOne({ email });

    if (user) {
      res.status(303).json({
        success: false,
        message: 'User already exists',
      });
    } else {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      await db.user.create({
        email,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        password: passwordHash,
      });
      res.status(201).json({
        success: true,
        message: `Account has been created for ${email}`,
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Missing required fields',
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = await db.user.findOne({ email });
    if (!user) {
      res.status(404).json({
        success: false,
        message: `Account with email ${email} does not exist`,
      });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const authToken = await jwt.sign(
          { id: user._id, email: user.email },
          AUTH_SECRET,
          { expiresIn: '1h' },
        );
        res.status(200).json({ success: true, token: authToken });
      } else {
        res.status(401).json({
          success: false,
          message: 'Failed user authentication',
        });
      }
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Missing required fields',
    });
  }
};

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
