/**
 * @summary Salary Inquiry Endpoint Controller for SET
 * @author  dallascrichmond
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

/**
 * @summary Creates new Inquiry
 * @author dallascrichmond
 */
export const createInquiry = async (req: Request, res: Response) => {
    try {
        const response = await prisma.inquiry.create({
            data: req.body
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

/**
 * @summary Updates new inquiries
 * @author dallascrichmond
 */
export const updateInquiry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const inquiryID: number = +id;
    try {
        const response = await prisma.inquiry.update({
            where: {
                id: inquiryID
            },
            data: req.body,
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

/**
 * @summary Deletes an inquiry based on ID
 * @author dallascrichmond
 */
export const deleteInquiry = async (req: Request, res: Response) => {
    try {
        const response = await prisma.inquiry.delete({
            where: {
                id: req.body.id,
            }
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

/**
 * @summary Returns all inquiries
 * @author dallascrichmond
 */
export const getInquiry = async (req: Request, res: Response) => {
    try {
        const inquiries = await prisma.inquiry.findMany();
        res.status(200).json(inquiries);
    } catch (error) {
        res.status(500).json(error);
    }
};

/**
 * @summary Return inquiry by ID
 * @author dallascrichmond
 */
export const getInquiryById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const inquiryID: number = +id;
    try {
        const inquiry = await prisma.inquiry.findFirst({
            where: {
                id: inquiryID,
            }
        });
        res.status(200).json(inquiry);
    } catch (error) {
        res.status(500).json(error);
    }
};

/**
 * @summary Returns all inquiries associated with the passed in guid
 * @author dallascrichmond
 */
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
        return res.status(500).json(error);
    }
};
