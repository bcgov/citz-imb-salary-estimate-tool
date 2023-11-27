/**
 * @summary Past Salary Data Endpoint Controller for SET
 * @author  dallascrichmond
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

/**
 * @summary Creates new Salary Data entry
 * @author dallascrichmond
 */
export const createSalaryData = async (req: Request, res: Response) => {
    try {
        const response = await prisma.salaryData.create({
            data: req.body
        });
        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// /**
//  * @summary Updates Salary Data entry
//  * @author dallascrichmond
//  */
// export const updateSalaryData = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const salaryDataId: number = +id;
//     try {
//         const response = await prisma.salaryData.update({
//             where: {
//                 id: salaryDataId
//             },
//             data: req.body,
//         });
//         return res.status(204).json(response);
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// };

/**
 * @summary Deletes salary data based on ID
 * @author dallascrichmond
 */
export const deleteSalaryData = async (req: Request, res: Response) => {
    const { id } = req.params;
    const salaryDataID: number = +id;
    try {
        const response = await prisma.salaryData.delete({
            where: {
                id: salaryDataID,
            }
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

/**
 * @summary Returns Salary Data by ID
 * @author dallascrichmond
 */
export const getSalaryDataById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const salaryDataID: number = +id;
    try {
        const salaryData = await prisma.salaryData.findFirst({
            where: {
                id: salaryDataID,
            }
        });
        if(salaryData) {
            return res.status(200).json(salaryData);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};

/**
 * @summary Returns all Salary Data associated with the passed in query parameters
 * @author dallascrichmond
 */
export const getSalaryDataByParams = async (req: Request, res: Response) => {
    const { title, positionNumber, jobCode, employeeId } = req.query;
    
    const position: number = +positionNumber;
    const job: number = +jobCode;
    const employee: number = +employeeId;

    try {
        const salaryData = await prisma.salaryData.findMany({
            where: {
                OR: [
                    {
                        title: title as string
                    },
                    {
                        position_number: position
                    },
                    {
                        job_code: job
                    },
                    {
                        employee_id: employee
                    },
                ]
            }
        });
        if (salaryData.length !== 0) {
            return res.status(200).json(salaryData);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};