import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';
import {
    salaryRanges,
    statuses,
    experienceLevels,
    appointments,
    processes,
    users,
    inquiries,
    salaryData,
} from './data.mjs';

const prisma = new PrismaClient();

dotenv.config();

const environment = process.env.NODE_ENV || "production";

/**
 * @summary Seeds all the necessary base data in both dev and prod. 
 * Checks for any changes to existing tables and updates accordingly
 * @author dallascrichmond
 */
async function seedBase() {
    const seedingPromises = [];

    seedingPromises.push(
        ...salaryRanges.map(range => prisma.salaryRange.upsert({
            where: { id: range.id },
            create: range,
            update: range,
        }))
    );

    seedingPromises.push(
        ...statuses.map(status => prisma.status.upsert({
            where: { id: status.id },
            create: status,
            update: status,
        }))
    );

    seedingPromises.push(
        ...experienceLevels.map(exp => prisma.experience.upsert({
            where: { id: exp.id },
            create: exp,
            update: exp,
        }))
    );

    seedingPromises.push(
        ...appointments.map(appointment => prisma.appointment.upsert({
            where: { id: appointment.id },
            create: appointment,
            update: appointment,
        }))
    );

    seedingPromises.push(
        ...processes.map(process => prisma.process.upsert({
            where: { id: process.id },
            create: process,
            update: process,
        }))
    );

    await Promise.all(seedingPromises);
}


/**
 * @summary Seeds users in dev
 * @author dallascrichmond
 */
async function seedUsers() {
    const seedingPromises = users.map(user => prisma.user.upsert({
        where: { guid: user.guid },
        create: user,
        update: user,
    }));

    await Promise.all(seedingPromises);
}

/**
 * @summary Seeds inquiries in dev
 * @author dallascrichmond
 */
async function seedInquiries() {
    const seedingPromises = inquiries.map(inquiry => prisma.inquiry.create({
        data: inquiry,
    }));

    await Promise.all(seedingPromises);
}

/**
 * @summary Seeds Salary Data in dev
 * @author dallascrichmond
 */
async function seedSalaryData() {
    const seedingPromises = salaryData.map(data => prisma.salaryData.create({
        data
    }));

    await Promise.all(seedingPromises);
}

(async () => {
    try {
        await seedBase();
        if (environment === "development") {
            await seedUsers();
            await seedInquiries();
            await seedSalaryData();
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error during seeding:", error);
    } finally {
        await prisma.$disconnect();
    }
})();
