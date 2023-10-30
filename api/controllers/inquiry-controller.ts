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

export const getInquiryByGuid = async (req: Request, res: Response) => {
    const { guid } = req.query;
    try {
        const inquiries = await prisma.inquiry.findMany({
            where: {
                OR: [
                    {
                        hm_user_id: guid as string
                    },
                    {
                        shr_user_id: guid as string
                    },
                    {
                        adm_user_id: guid as string
                    },
                ]
            }
        });
        if (inquiries) {
            return res.status(200).json(inquiries);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(500).send(httpResponses[500]);
    }
};
