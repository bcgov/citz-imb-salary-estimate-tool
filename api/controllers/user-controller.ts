/**
 * @summary User Endpoint Controller for SET
 * @author  Dallascrichmond
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

export const getUserByGuid = async (req: Request, res: Response) => {
    const { guid } = req.query;

    try {
        const user = await prisma.user.findFirst({
            where: {
                guid: guid as string
            }
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(httpResponses[500]);
    }
};

