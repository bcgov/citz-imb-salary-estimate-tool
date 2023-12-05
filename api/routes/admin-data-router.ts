/**
 * @summary This is the Admin Data Endpoint for SET, its purpose is to
 *          perform CRUD operations on the all admin data (ministries, experience, process and appointment)
 * @author dallascrichmond
 */
import express from 'express';
import { 
    getMinistries,
    getExperiences,
    getAppointments,
    getProcesses,
} from '../controllers/admin-data-controller';

const router = express.Router();

// GET ministries
router.route('/ministry')
    .get(getMinistries);

// GET experiences
router.route('/experience')
    .get(getExperiences);

// GET appointments
router.route('/appointment')
    .get(getAppointments);

// GET processes
router.route('/process')
    .get(getProcesses);

export default router;
