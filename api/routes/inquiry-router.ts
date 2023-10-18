/**
 * @summary This is the Salary Inquiry Endpoint for SET, its purpose is to provide health
 *          do CRUD operations on the Salary inquiries
 * @author Dallascrichmond
 */
import express from 'express';
import { getInquiry } from '../controllers/inquiry-controller';

const router = express.Router();

router.route('/inquiry')
    .get(getInquiry);

export default router;
