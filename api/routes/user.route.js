import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

export default router;
// exporting it as default allows us to call this any name when we import it