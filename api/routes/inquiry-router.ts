import express from 'express';
// import { PrismaClient } from '@prisma/client';
import { getInquiry } from '../controllers/inquiry-controller';

const router = express.Router();
// const prisma = new PrismaClient;

// router.get('/inquiries', async (req, res, next) => {
//     try {
//         const inquiries = await prisma.inquiry.findMany();
//         res.json(inquiries);
//     } catch (error) {
//         next(error);
//     }
// });

router.route('/inquiry')
    .get(getInquiry);

// router.get('/inquiries/:id', async (req, res) => {
//     res.status(200).send('Inquiries Endpoint working');
// });

// router.post('/inquiries', async (req, res) => {
//     res.status(200).send('Inquiries Endpoint working');
// });

// router.delete('/inquiries/:id', async (req, res) => {
//     res.status(200).send('Inquiries Endpoint working');
// });

// router.patch('/inquiries/:id', async (req, res) => {
//     res.status(200).send('Inquiries Endpoint working');
// });

export default router;