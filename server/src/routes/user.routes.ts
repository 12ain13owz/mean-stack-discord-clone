import express from 'express';
import { signup } from '../controllers/user.controlles';
import { signupUserSchema } from '../schema/user.schema';
import { validate } from '../middlewares/validate.middleware';
const router = express.Router();

router.use('/signup', validate(signupUserSchema), signup);

export default router;
