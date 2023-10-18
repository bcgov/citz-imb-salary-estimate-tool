/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    for (const data of statuses) {
        await prisma.status.create({
            data,
        });
    }
    for (const data of salaryRanges) {
        await prisma.salaryRange.create({
            data,
        });
    }
    for (const data of ministries) {
        await prisma.ministry.create({
            data,
        });
    }
    for (const data of experienceLevels) {
        await prisma.experience.create({
            data,
        });
    }
    for (const data of appointments) {
        await prisma.appointment.create({
            data,
        });
    }
    for (const data of processes) {
        await prisma.process.create({
            data,
        });
    }
    for (const data of inquiries) {
        await prisma.inquiry.create({
            data,
        });
    }
}

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
