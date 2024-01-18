import express from 'express';
const router = express.Router();

import { getAllMinistries } from './controller';

/**
 * @method GET
 * @route /ministry/all
 */
router.get('/all', getAllMinistries);

export default router;
