/**
 * @summary This is the Salary Data Endpoint for SET, its purpose is to provide
 *          perform CRUD operations on Salary Data
 * @author dallascrichmond
 */
import express from 'express';
import {
    getSalaryDataById,
    getSalaryDataByParams,
    createSalaryData,
    deleteSalaryData,
    getSalaryData
} from '../controllers/salary-data-controller';

const router = express.Router();

// GET salary data by title, positionNumber, jobCode, or employeeId
router.route('/params')
    .get(getSalaryDataByParams);

// CREATE salary data, or GET all salary data
router.route('/')
    .post(createSalaryData)
    .get(getSalaryData);

// GET, UPDATE and DELETE salary data by id
router.route('/:id')
    .get(getSalaryDataById)
    .delete(deleteSalaryData);

export default router;
