import express from 'express';
const router = express.Router();

import { getAllMinistries, createMinistry, updateMinistry, deleteMinistry } from './controller';

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

/**
 * @method DELETE
 * @route /ministry/:id
 */
router.delete('/:id', deleteMinistry);

export default router;
