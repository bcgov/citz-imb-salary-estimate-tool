/**
 * @summary All seed data for deva dn prod
 * @author Dallascrichmond
 */
export const salaryRanges = [
    { id: 1, minimum_salary: 63400, maximum_salary: 90399.95 },
    { id: 2, minimum_salary: 74300, maximum_salary: 105000.04 },
    { id: 3, minimum_salary: 86200, maximum_salary: 122100.01 },
    { id: 4, minimum_salary: 102900, maximum_salary: 136700.11 },
    { id: 5, minimum_salary: 119600, maximum_salary: 152599.97 },
    { id: 6, minimum_salary: 137700, maximum_salary: 168500.09 },
];

export const statuses = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
];

// TODO: Add all minitries
export const ministries = [
    { id: 'CITZ', ministry_name: 'Citizen Services' },
    { id: 'PSA', ministry_name: 'Public Service Agency' },
];

export const experienceLevels = [
    { id: 1, definition: 'No expereince' },
    { id: 2, definition: 'Little experience' },
    { id: 3, definition: 'Some experience' },
    { id: 4, definition: 'Lots of experience' },
];

export const appointments = [
    { id: 1 },
    { id: 2 },
];

export const processes = [
    { id: 1 },
    { id: 2 }
];

export const users = [
    {
        guid: 'SQJHDNJASBC12388271267GS718G',
        username: 'DALRICH',
        email: 'dallas.richmond@gov.bc.ca',
        user_first_name: 'Dallas',
        user_last_name: 'Richmond',
        roles: [
            'HM',
        ],
    },
    {
        guid: 'KJBCKJBDFWE928371761JBJH71',
        username: 'CARLTHOM',
        email: 'carl.thomas@gov.bc.ca',
        user_first_name: 'Carl',
        user_last_name: 'Thomas',
        roles: [
            'SHR',
        ],
    },
    {
        guid: 'AJSIUC0002948433KDOJEWNDFHD',
        username: 'CARLTHOM',
        email: 'carl.thomas@gov.bc.ca',
        user_first_name: 'Carl',
        user_last_name: 'Thomas',
        roles: [
            'adm',
        ],
    },
]

export const inquiries = [
    {
        id: 1,
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
        hm_user_id: 'SQJHDNJASBC12388271267GS718G',
        shr_user_id: 'KJBCKJBDFWE928371761JBJH71',
        adm_user_id: 'AJSIUC0002948433KDOJEWNDFHD',
    },
    {
        id: 2,
        status_id: 6,
        inquiry_completion_date: null,
        candidate_first_name: 'Tyler',
        candidate_last_name: 'Smith',
        current_position_number: 293847,
        current_position_title: 'Manager',
        current_ministry_id: 'PSA',
        current_annual_salary: 80000,
        current_mccf_classification_id: 1,
        experience_level_id: 3,
        new_position_number: 2938475,
        new_position_title: 'Team Lead',
        new_mccf_classification_id: 2,
        appointment_type_id: 1,
        process_type_id: 1,
        salary_estimate: 102000,
        hm_comment: 'Here is the successful candidate',
        shr_comment: 'Here is the salary estimate. Reach out if you have any questions',
        adm_comment: null,
        hm_user_id: 'SQJHDNJASBC12388271267GS718G',
        shr_user_id: null,
        adm_user_id: null,
    },
    {
        id: 3,
        status_id: 2,
        inquiry_completion_date: null,
        candidate_first_name: 'Cindy',
        candidate_last_name: 'Charles',
        current_position_number: 293847,
        current_position_title: 'Full Stack Developer',
        current_ministry_id: 'CITZ',
        current_annual_salary: 80000,
        current_mccf_classification_id: null,
        experience_level_id: 3,
        new_position_number: 2938475,
        new_position_title: 'Scrum Master',
        new_mccf_classification_id: 3,
        appointment_type_id: 1,
        process_type_id: 1,
        salary_estimate: 102000,
        hm_comment: 'Here is the successful candidate',
        shr_comment: 'Here is the salary estimate. Reach out if you have any questions',
        adm_comment: null,
        hm_user_id: 'SQJHDNJASBC12388271267GS718G',
        shr_user_id: 'KJBCKJBDFWE928371761JBJH71',
        adm_user_id: null,
    },
];
