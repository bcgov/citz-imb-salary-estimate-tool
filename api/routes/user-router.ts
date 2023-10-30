/**
 * @summary This is the User Endpoint for SET
 * @author Dallascrichmond
 */
import express from 'express';
import { getUserByGuid } from '../controllers/user-controller';

const router = express.Router();

// Inquiries from single guid
router.route('/user/guid').get(getUserByGuid);

export default router;
