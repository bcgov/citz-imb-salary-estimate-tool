const dotenv = require('dotenv');
dotenv.config({ path: '../.env'});

const endpoint = process.env.ENVIRONMENT === 'local' ? `http://localhost:${process.env.FRONTEND_PORT}/api` : `${process.env.FRONTEND_URL}/api`;
const supertest = require('supertest')
const request = supertest(endpoint);

describe("Testing GET routes for /inquiry endpoint", () => {
    const uniqueID = 999999;
    let inquiryID;

    beforeAll(async () => {
        const response = await request.post("/inquiry").send({
            status_id: 1,
            inquiry_completion_date: null,
            candidate_first_name: 'Test',
            candidate_last_name: 'Test',
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
            shr_user_id: null,
            adm_user_id: null,
        });
        inquiryID = response.body._id;
    });

    test("Inquiry is retrieved from base route", async () => {
        const response = await request.get("/inquiry");
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // At least a single value should be returned.
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("Inquiries are retrieved by user guid", async () => {
        const response = await request.get("/inquiry/guid").query({ guid: "SQJHDNJASBC12388271267GS718G" });
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        // At least a single value should be returned.
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("Inquiry is retrieved by its id", async () => {
        const response = await request.get(`/inquiry/${1}`);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(1);
    });
});
