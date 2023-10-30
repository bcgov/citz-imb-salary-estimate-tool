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

        if (user) {
            return res.status(200).json(user); 
        }

        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(500).send(httpResponses[500]);
    }
};

