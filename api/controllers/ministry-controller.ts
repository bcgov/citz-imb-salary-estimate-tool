/**
 * @summary Ministry Endpoint Controller for SET
 * @author  sarahson
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

/**
 * @summary Creates new Ministry
 * @author sarahson
 */
export const createMinistry = async (req: Request, res: Response) => {
    try {
        const response = await prisma.ministry.create({
            data: req.body
        });
        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

/**
 * @summary Updates new Ministry
 * @author sarahson
 */
export const updateMinistry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ministryID: number = +id;
    try {
        const response = await prisma.ministry.update({
            where: {
                id: ministryID
            },
            data: req.body,
        });
        return res.status(204).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

/**
 * @summary Deletes an ministry based on ID
 * @author sarahson
 */
export const deleteMinistry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ministryID: number = +id;
    try {
        const response = await prisma.ministry.delete({
            where: {
                id: ministryID,
            }
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

/**
 * @summary Returns ministry by ID
 * @author sarahson
 */
export const getMinistryById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ministryID: number = +id;
    try {
        const inquiry = await prisma.ministry.findFirst({
            where: {
                id: ministryID,
            }
        });
        if(inquiry) {
            return res.status(200).json(inquiry);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};

/**
 * @summary Returns all ministries
 * @author sarahson
 */
export const getMinistry = async (req: Request, res: Response) => {
    try {
        const ministries = await prisma.ministry.findMany();
        if(ministries.length !== 0){
            return res.status(200).json(ministries);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};
