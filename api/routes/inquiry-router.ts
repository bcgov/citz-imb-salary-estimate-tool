import express from 'express';
import { getInquiry } from '../controllers/inquiry-controller';

const router = express.Router();

router.route('/inquiry')
    .get(getInquiry);

export default router;
