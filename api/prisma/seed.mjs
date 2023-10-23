/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
// TODO: CHECK if the seed data is already there (for prod)
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

const prisma = new PrismaClient();

dotenv.config();

// const environment = process.env.NODE_ENV || "production";

const salaryRanges = [
    { id: 1, minimum_salary: 63400, maximum_salary: 90399.95 },
    { id: 2, minimum_salary: 74300, maximum_salary: 105000.04 },
    { id: 3, minimum_salary: 86200, maximum_salary: 122100.01 },
    { id: 4, minimum_salary: 102900, maximum_salary: 136700.11 },
    { id: 5, minimum_salary: 119600, maximum_salary: 152599.97 },
    { id: 6, minimum_salary: 137700, maximum_salary: 168500.09 },
];

const statuses = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
];

const ministries = [
    { id: 'CITZ', ministry_name: 'Citizen Services' },
    { id: 'PSA', ministry_name: 'Public Service Agency' },
];

const experienceLevels = [
    { id: 1, definition: 'No expereince' },
    { id: 2, definition: 'Little experience' },
    { id: 3, definition: 'Some experience' },
    { id: 4, definition: 'Lots of experience' },
];

const appointments = [
    { id: 1 },
    { id: 2 },
];

const processes = [
    { id: 1 },
    { id: 2 }
];

const inquiries = [
    {
        id: 123,
        status_id: 1,
        inquiry_completion_date: null,
        candidate_first_name: 'Dallas',
        candidate_last_name: 'Richmond',
        current_position_number: null,
        current_position_title: null,
        current_ministry_id: null,
        current_annual_salary: null,
        current_mccf_classification_id: null,
        experience_level_id: 1,
        new_position_number: 2938475,
        new_position_title: 'Scrum Master',
        new_mccf_classification_id: 3,
        appointment_type_id: 1,
        process_type_id: 1,
        salary_estimate: null,
        hm_comment: null,
        shr_comment: null,
        adm_comment: null,
        hm_user_id: null,
        shr_user_id: null,
        adm_user_id: null,
    }
];

async function seed () {
    salaryRanges.forEach(async (range) => {
        await prisma.salaryRange.upsert({
            where: {
                id: range.id,
            },
            create: ({
                id: range.id,
                minimum_salary: range.minimum_salary,
                maximum_salary: range.maximum_salary,
            }),
            update: ({
                id: range.id,
                minimum_salary: range.minimum_salary,
                maximum_salary: range.maximum_salary,
            })
        });
    });

    statuses.forEach(async (status) => {
        await prisma.status.upsert({
            where: {
                id: status.id,
            },
            create: {
                id: status.id,
            },
            update: {
                id: status.id,
            }
        });
    });

    ministries.forEach(async (ministry) => {
        await prisma.ministry.upsert({
            where: {
                id: ministry.id,
            },
            create: {
                id: ministry.id,
                ministry_name: ministry.ministry_name,
            },
            update: {
                id: ministry.id,
                ministry_name: ministry.ministry_name,
            }
        });
    });

    experienceLevels.forEach(async (expereince) => {
        await prisma.experience.upsert({
            where: {
                id: expereince.id,
            },
            create: {
                id: expereince.id,
                definition: expereince.definition,
            },
            update: {
                id: expereince.id,
                definition: expereince.definition,
            }
        });
    });

    appointments.forEach(async (appointment) => {
        await prisma.appointment.upsert({
            where: {
                id: appointment.id,
            },
            create: {
                id: appointment.id,
            },
            update: {
                id: appointment.id,
            }
        });
    });

    processes.forEach(async (process) => {
        await prisma.process.upsert({
            where: {
                id: process.id,
            },
            create: {
                id: process.id,
            },
            update: {
                id: process.id,
            }
        });
    });
    // TODO: Fix developer env and check out inquiry id and status id not allowed to be the same

    // if (environment === "developer") {
        inquiries.forEach(async (inquiry) => {
            await prisma.inquiry.upsert({
                where: {
                    id: inquiry.id,
                },
                create: {
                    id: inquiry.id,
                    status_id: inquiry.status_id,
                    inquiry_completion_date: inquiry.inquiry_completion_date,
                    candidate_first_name: inquiry.candidate_first_name,
                    candidate_last_name: inquiry.candidate_last_name,
                    current_position_number: inquiry.current_position_number,
                    current_position_title: inquiry.current_position_title,
                    current_ministry_id: inquiry.current_ministry_id,
                    current_annual_salary: inquiry.current_annual_salary,
                    current_mccf_classification_id: inquiry.current_mccf_classification_id,
                    experience_level_id: inquiry.experience_level_id,
                    new_position_number: inquiry.new_position_number,
                    new_position_title: inquiry.new_position_title,
                    new_mccf_classification_id: inquiry.new_mccf_classification_id,
                    appointment_type_id: inquiry.appointment_type_id,
                    process_type_id: inquiry.process_type_id,
                    salary_estimate: inquiry. salary_estimate,
                    hm_comment: inquiry.hm_comment,
                    shr_comment: inquiry.shr_comment,
                    adm_comment: inquiry.adm_comment,
                    hm_user_id: inquiry.hm_user_id,
                    shr_user_id: inquiry.shr_user_id,
                    adm_user_id: inquiry.adm_user_id,
                },
                update: {
                    id: inquiry.id,
                    status_id: inquiry.status_id,
                    inquiry_completion_date: inquiry.inquiry_completion_date,
                    candidate_first_name: inquiry.candidate_first_name,
                    candidate_last_name: inquiry.candidate_last_name,
                    current_position_number: inquiry.current_position_number,
                    current_position_title: inquiry.current_position_title,
                    current_ministry_id: inquiry.current_ministry_id,
                    current_annual_salary: inquiry.current_annual_salary,
                    current_mccf_classification_id: inquiry.current_mccf_classification_id,
                    experience_level_id: inquiry.experience_level_id,
                    new_position_number: inquiry.new_position_number,
                    new_position_title: inquiry.new_position_title,
                    new_mccf_classification_id: inquiry.new_mccf_classification_id,
                    appointment_type_id: inquiry.appointment_type_id,
                    process_type_id: inquiry.process_type_id,
                    salary_estimate: inquiry. salary_estimate,
                    hm_comment: inquiry.hm_comment,
                    shr_comment: inquiry.shr_comment,
                    adm_comment: inquiry.adm_comment,
                    hm_user_id: inquiry.hm_user_id,
                    shr_user_id: inquiry.shr_user_id,
                    adm_user_id: inquiry.adm_user_id,
                }
            });
        });
    // }
    

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
