/**
 * @summary Salary Inquiry Endpoint Controller for SET
 * @author  Dallascrichmond
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

export const getInquiry = async (req: Request, res: Response) => {
    try {
        const inquiries = await prisma.inquiry.findMany();
        res.status(200).json(inquiries);
    } catch (ex) {
        res.status(500).send(httpResponses[500]);
    }
};
