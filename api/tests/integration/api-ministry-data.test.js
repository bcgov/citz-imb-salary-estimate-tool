const dotenv = require('dotenv');
dotenv.config({ path: '../.env'});

const endpoint = process.env.ENVIRONMENT === 'local' ? `http://localhost:${process.env.FRONTEND_PORT}/api` : `${process.env.FRONTEND_URL}/api`;
const supertest = require('supertest')
const request = supertest(endpoint);

let ministryID;

// Test suite for /ministry/** endpoints
describe('Testing routes for /ministry/** endpoints', () => {
    beforeAll(async () => {
        const response = await request.post('/ministry').send({
            ministry_id: 'CITZ',
            ministry_name: 'Citizen Services',
        });
        ministryID = response.body.id;
        expect(response.ok).toBe(true);
        expect(response.status).toBe(201);
    });

    // Test case: Retrieve a ministry by its ID
    test('Ministry is retrieved by its id', async () => {
        const response = await request.get(`/ministry/${ministryID}`);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // Same ID that was POSTed earlier in the test suite
        expect(response.body.id).toBe(ministryID);
    });

    // Test case: Attempt to retrieve a non-existent ministry by an invalid ID
    test('Ministry by id not found', async () => {
        const response = await request.get('/ministry/999999');
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);
    });

    // Test case: Delete a ministry entry by its ID
    test('Delete an Ministry entry by id', async () => {
        let response = await request.delete(`/ministry/${ministryID}`);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);

        // Checks to make sure the ministry has been deleted
        response = await request.get(`/ministry/${ministryID}`);
        expect(response.ok).toBe(false);
        expect(response.status).toBe(404);
    });

    // Test case: Attempt to delete a ministry entry with an invalid ID
    test('Attempts to delete a Ministry entry with invalid ID', async () => {
        let response = await request.delete('/ministry/99999');
        expect(response.ok).toBe(false);
        expect(response.status).toBe(400);
    });
});
