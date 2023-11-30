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

// CREATE salary data, GET salary data by title, positionNumber, jobCode, or employeeId
// or get all salary data
router.route('/salary')
    .post(createSalaryData)
    .get(getSalaryDataByParams)
    .get(getSalaryData);

// GET, UPDATE and DELETE salary data by id
router.route('/salary/:id')
    .get(getSalaryDataById)
    .delete(deleteSalaryData);

export default router;
