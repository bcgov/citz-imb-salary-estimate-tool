/**
 * @summary This is the Salary Inquiry Endpoint for SET, its purpose is to provide health
 *          do CRUD operations on the Salary inquiries
 * @author dallascrichmond
 */
import express from 'express';
import { getInquiry, getInquiryByGuid } from '../controllers/inquiry-controller';

const router = express.Router();

// Get all inquiries
router.route('/inquiry').get(getInquiry);

// Get inquiries with guid
router.route('/inquiry/guid').get(getInquiryByGuid);

export default router;
