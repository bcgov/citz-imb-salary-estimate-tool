/**
 * @summary Endpoint for all admin seed data (ministry, process, appointment and experience)
 * @author dallascrichmond
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

// Ministry

/**
 * @summary Returns all minirties
 * @author dallascrichmond
 */
export const getMinistries = async (req: Request, res: Response) => {
    try {
        const minirties = await prisma.ministry.findMany();
        if(minirties.length !== 0){
            return res.status(200).json(minirties);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Experience

/**
 * @summary Returns all experience levels
 * @author dallascrichmond
 */
export const getExperiences = async (req: Request, res: Response) => {
    try {
        const experiences = await prisma.experience.findMany();
        if(experiences.length !== 0){
            return res.status(200).json(experiences);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Process

/**
 * @summary Returns all processes (2)
 * @author dallascrichmond
 */
export const getProcesses = async (req: Request, res: Response) => {
    try {
        const processes = await prisma.process.findMany();
        if(processes.length !== 0){
            return res.status(200).json(processes);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Appointment

/**
 * @summary Returns all appointments (2)
 * @author dallascrichmond
 */
export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await prisma.appointment.findMany();
        if(appointments.length !== 0){
            return res.status(200).json(appointments);
        }
        return res.status(404).send(httpResponses[404]);
    } catch (error) {
        return res.status(400).json(error);
    }
};
