import express from 'express';
const router = express.Router();

import { getAllMinistries, createMinistry } from './controller';

/**
 * @method GET
 * @route /ministry
 */
router.get('/', getAllMinistries);

/**
 * @method POST
 * @route /ministry
 */
router.post('/', createMinistry);

export default router;
