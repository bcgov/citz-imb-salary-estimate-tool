// const dotenv = require('dotenv');
// dotenv.config({ path: '../.env'});

// const endpoint = process.env.ENVIRONMENT === 'local' ? `http://localhost:${process.env.FRONTEND_PORT}/api` : `${process.env.FRONTEND_URL}/api`;
// const supertest = require('supertest')
// const request = supertest(endpoint);

// describe('Testing routes for /user/** endpoints', () => {
//     // If test fails, login to the app with your IDIR
//     test('Get all users', async () => {
//         const response = await request.get('/user');
//         expect(response.ok).toBe(true);
//         expect(response.status).toBe(200);
//         expect(response.body.length).toBeGreaterThan(0);
//     });
// });
