/**
 * @summary User Endpoint Controller for SET
 * @author  Dallascrichmond
 */
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { KeycloakUser, KeycloakIdirUser } from "@bcgov/kc-express";
import httpResponses from '../utils/httpResponse';

const prisma = new PrismaClient;

/**
 * @summary Gets a user by their guid
 * @author Dallascrichmond 
 */
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

/**
 * @summary Get all users
 * @author Dallascrichmond 
 */
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (ex) {
        res.status(500).send(httpResponses[500]);
    }
};

/**
 * @summary Creates or updates user data
 * @author Dallascrichmond
 */
export const upsertUser = async (userData: KeycloakUser & KeycloakIdirUser) => {
    const newUser = {
        guid: userData.idir_user_guid,
        username: userData.idir_username,
        email: userData.email,
        user_first_name: userData.given_name,
        user_last_name: userData.family_name,
        roles: userData.client_roles ?? [],
        // lastUpdated: new Date(),
        // lastLogin: new Date(),
    };
    try {
        await prisma.user.upsert({
            where: {
                guid: userData.idir_user_guid,
            },
            create: newUser,
            update: newUser,
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error: ', error);
    }
}
