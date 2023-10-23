/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
// TODO: CHECK if the seed data is already there (for prod)
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

const prisma = new PrismaClient();

dotenv.config();

const environment = process.env.NODE_ENV || "production";

const salaryRanges = [
    { minimum_salary: 63400, maximum_salary: 90399.95 },
    { minimum_salary: 74300, maximum_salary: 105000.04 },
    { minimum_salary: 86200, maximum_salary: 122100.01 },
    { minimum_salary: 102900, maximum_salary: 136700.11 },
    { minimum_salary: 119600, maximum_salary: 152599.97 },
    { minimum_salary: 137700, maximum_salary: 168500.09 },
];

const statuses = [
    {},
    {},
    {},
    {},
    {},
    {},
];

const ministries = [
    { id: 'CITZ', ministry_name: 'Citizen Services' },
    { id: 'PSA', ministry_name: 'Public Service Agency' },
];

const experienceLevels = [
    { definition: 'No expereince' },
    { definition: 'Little experience' },
    { definition: 'Some experience' },
    { definition: 'Lots of experience' },
];

const appointments = [
    {},
    {},
];

const processes = [
    {},
    {}
];

const inquiries = [
    {
        status_id: 1,
        candidate_first_name: 'Dallas',
        candidate_last_name: 'Richmond',
        experience_level_id: 1,
        new_position_number: 2938475,
        new_position_title: 'Scrum Master',
        new_mccf_classification_id: 3,
        appointment_type_id: 1,
        process_type_id: 1,
    }
];

async function seed () {
    salaryRanges.forEach(async (range) => {
        await prisma.salaryRange.upsert({
            where: {
                range,
            },
            create: {
                range,
            },
            update: {
                range,
            }
        });
    });

    statuses.forEach(async (status) => {
        await prisma.status.upsert({
            where: {
                status,
            },
            create: {
                status,
            },
            update: {
                status,
            }
        });
    });

    ministries.forEach(async (ministry) => {
        await prisma.ministry.upsert({
            where: {
                ministry,
            },
            create: {
                ministry,
            },
            update: {
                ministry,
            }
        });
    });

    experienceLevels.forEach(async (expereince) => {
        await prisma.experience.upsert({
            where: {
                expereince,
            },
            create: {
                expereince,
            },
            update: {
                expereince,
            }
        });
    });

    appointments.forEach(async (appointment) => {
        await prisma.appointment.upsert({
            where: {
                appointment,
            },
            create: {
                appointment,
            },
            update: {
                appointment,
            }
        });
    });

    processes.forEach(async (process) => {
        await prisma.process.upsert({
            where: {
                process,
            },
            create: {
                process,
            },
            update: {
                process,
            }
        });
    });

    if (environment === "developer") {
        inquiries.forEach(async (inquiry) => {
            await prisma.inquiry.upsert({
                where: {
                    inquiry,
                },
                create: {
                    inquiry,
                },
                update: {
                    inquiry,
                }
            });
        });
    }
    

    // if (existingSalaries.length !== salaryRanges.length) {
    //     await prisma.salaryRange.deleteMany();
    // }
    // for (const data of salaryRanges) {
    //     await prisma.salaryRange.create({
    //         data,
    //     });
    // }
    // if (existingStatuses.length !== statuses.length) {
    //     await prisma.status.deleteMany();
    // }
    // for (const data of statuses) {
    //     await prisma.status.create({
    //         data,
    //     });
    // }
    // if (existingMinistries.length !== ministries.length) {
    //     await prisma.ministry.deleteMany();
    // }
    // for (const data of ministries) {
    //     await prisma.ministry.create({
    //         data,
    //     });
    // }
    // if (existingExperienceLevels.length !== experienceLevels.length) {
    //     await prisma.experience.deleteMany();
    // }
    // for (const data of experienceLevels) {
    //     await prisma.experience.create({
    //         data,
    //     });
    // }
    // if (existingAppointments.length !== appointments.length) {
    //     await prisma.appointment.deleteMany();
    // }
    // for (const data of appointments) {
    //     await prisma.appointment.create({
    //         data,
    //     });
    // }
    // if (existingProcesses.length !== processes.length) {
    //     await prisma.process.deleteMany();
    // }
    // for (const data of processes) {
    //     await prisma.process.create({
    //         data,
    //     });
    // }
    // await prisma.inquiry.deleteMany();
    // for (const data of existingInquiries) {
    //     await prisma.inquiry.create({
    //         data,
    //     });
    // }
    // if (environment === 'development') {
    //     if (existingInquiries.length !== inquiries.length) {
    //         await prisma.inquiry.deleteMany();
    //     }
    //     for (const data of inquiries) {
    //         await prisma.inquiry.create({
    //             data,
    //         });
    //     }
    // }
}

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
