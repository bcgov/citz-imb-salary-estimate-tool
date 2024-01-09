/**
 * @summary This is the Salary Inquiry Endpoint for SET, its purpose is to provide
 *          perform CRUD operations on the Salary inquiries
 * @author dallascrichmond
 */
import express from 'express';
import { 
    getInquiry,
    getInquiryById,
    getInquiryByGuid,
    createInquiry,
    updateInquiry,
    deleteInquiry 
} from '../controllers/inquiry-controller';

const router = express.Router();

// GET and CREATE inquiries
router.route('/')
    .get(getInquiry)
    .post(createInquiry);

// GET inquiries by user guid
router.route('/guid').get(getInquiryByGuid);

// GET, UPDATE and DELETE inquiry by id
router.route('/:id')
    .get(getInquiryById)
    .patch(updateInquiry)
    .delete(deleteInquiry);

export default router;
