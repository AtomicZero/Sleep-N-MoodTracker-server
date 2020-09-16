import jwt from 'jsonwebtoken';
import db from '../models';
import { AUTH_SECRET } from '../config';

const authenticateUser = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const userAuthToken = authorizationHeader.split(' ')[1];
    const jwtPayload = jwt.verify(userAuthToken, AUTH_SECRET);
    const user = await db.user.findById(jwtPayload.id);

    if (!user) {
      res.status(404).send({
        success: false,
        message: 'Your user could not be found',
      });
      return next(new Error(['Your user could not be found']));
    }
    req.user = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return next();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "You're not authorised to access this route",
    });
    return next(new Error([error]));
  }
};
export default authenticateUser;
