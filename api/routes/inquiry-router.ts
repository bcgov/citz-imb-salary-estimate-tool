/**
 * @summary This is the Salary Inquiry Endpoint for SET, its purpose is to provide health
 *          do CRUD operations on the Salary inquiries
 * @author dallascrichmond
 */
import express from 'express';
import { getInquiry, getInquiryByGuid, createInquiry, updateInquiry, deleteInquiry } from '../controllers/inquiry-controller';

const router = express.Router();

// Get all inquiries and creates/updates inquiries
router.route('/inquiry')
    .get(getInquiry)
    .post(createInquiry)
    .delete(deleteInquiry);

// Get inquiries with guid
router.route('/inquiry/guid').get(getInquiryByGuid);

// Get inquiry by id and update by id
// TODO: Create getInquiryById function in inquiry-controller
router.route('/inquiry/:id')
    // .get(getInquiryById)
    .patch(updateInquiry);

export default router;
