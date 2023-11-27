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
    deleteSalaryData
} from '../controllers/salary-data-controller';

const router = express.Router();

// CREATE salary data
router.route('/salary')
    .post(createSalaryData);

// GET, UPDATE and DELETE salary data by id
router.route('/salary/:id')
    .get(getSalaryDataById)
    .delete(deleteSalaryData);

// GET salary data by title, positionNumber, jobCode, or employeeId
router.route('/salary/data')
    .get(getSalaryDataByParams);

export default router;
