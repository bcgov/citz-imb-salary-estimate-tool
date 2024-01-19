import express from 'express';
const router = express.Router();

import { getAllMinistries, createMinistry, updateMinistry } from './controller';

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

/**
 * @method PATCH
 * @route /ministry/:id
 */
router.patch('/:id', updateMinistry);

export default router;
