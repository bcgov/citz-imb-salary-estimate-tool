const dotenv = require('dotenv');
dotenv.config({ path: '../.env'});

const endpoint = process.env.ENVIRONMENT === 'local' ? `http://localhost:${process.env.FRONTEND_PORT}/api` : `${process.env.FRONTEND_URL}/api`;
const supertest = require('supertest')
const request = supertest(endpoint);

let salaryDataID;

describe('Testing routes for /salary/** endpoints', () => {
    beforeAll(async () => {
        const response = await request.post('/salary').send({
            organization: 'Citizen Services',
            program: 'OCIO Enterprise Services',
            program_division: 'Information Management Branch',
            position_number: 124008,
            title: 'Intermediate Developer, Java',
            job_code: 508010,
            classification: 'Band 3',
            appointment: 'R',
            schedule: 'F',
            supervisor_position_number: 129079,
            employee_id: 174833,
            employee_job_code: 508011,
            employee_classification: 'Band 3',
            step: 1,
            position_job_code_max_annual_rate: 136700,
            employee_job_code_max_annual_rate: 136700,
            abbr: 105000,
            ama: 349
        });
        salaryDataID = response.body.id;
        expect(response.ok).toBe(true);
        expect(response.status).toBe(201);
    });

    test('GET Salary Data by title, position number, jobe code or employee id', async () => {
        let response = await request.get('/salary/data').query({ title: 'Intermediate Developer, Java'});
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // Ensures at least one Salary Data entry is returned
        expect(response.body.length).toBeGreaterThan(0);

        response = await request.get('/salary/data').query({ positionNumber: 124008});
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // Ensures at least one Salary Data entry is returned
        expect(response.body.length).toBeGreaterThan(0);
        
        response = await request.get('/salary/data').query({ jobCode: 508010});
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // Ensures at least one Salary Data entry is returned
        expect(response.body.length).toBeGreaterThan(0);

        response = await request.get('/salary/data').query({ employeeId: 174833});
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // Ensures at least one Salary Data entry is returned
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Salary Data does not exist for title, position number, jobe code or employee id', async () => {
        let response = await request.get('/salary/data').query({ title: 'Manager'});
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);

        response = await request.get('/salary/data').query({ positionNumber: 259725});
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);
        
        response = await request.get('/salary/data').query({ jobCode: 259725});
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);

        response = await request.get('/salary/data').query({ employeeId: 259725});
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);

    });

    test('Salary Data is retrieved by its id', async () => {
        const response = await request.get(`/salary/${salaryDataID}`);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // Same ID that was POSTed earlier in the test suite
        expect(response.body.id).toBe(salaryDataID);
    });

    test('Salary Data by id not found', async () => {
        const response = await request.get('/salary/999999');
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);
    });

    test('Delete an Salary Data entry by id', async () => {
        let response = await request.delete(`/salary/${salaryDataID}`);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);

        // Checks to make sure the inquiry has been deleted
        response = await request.get(`/salary/${salaryDataID}`);
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);
    });

    test('Attempts to delete a Salary Data entry with invalid ID', async () => {
        let response = await request.delete('/salary/99999');
        expect(response.ok).toBe(false);
        expect(response.status).toBe(400);
    });
});