/**
 * @summary This is the Ministry Endpoint for SET, its purpose is to provide
 *          perform CRUD operations on Ministry Data
 * @author sarahson
 */
import express from 'express';
import {
    createMinistry,
    getMinistryById,
    getMinistry,
    updateMinistry,
    deleteMinistry,
} from '../controllers/ministry-controller';

const router = express.Router();

// GET salary data by title, positionNumber, jobCode, or employeeId
// router.route('/params')
//     .get(getSalaryDataByParams);

// CREATE salary data, or GET all salary data
router.route('/')
    .post(createMinistry)
    .get(getMinistry);

// GET, UPDATE and DELETE salary data by id
router.route('/:id')
    .get(getMinistryById)
    .patch(updateMinistry)
    .delete(deleteMinistry);

export default router;
