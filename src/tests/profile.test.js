const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

describe('Profile API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('POST /api/profiles creates a profile', async () => {
    const response = await request(app)
      .post('/api/profiles')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        location: 'Test City',
        skills: ['JavaScript'],
        experienceYears: 3,
        hourlyRate: 30,
        availableForWork: true,
      });
    expect(response.status).toBe(201);
    expect(response.body.email).toBe('test@example.com');
  });

  test('GET /api/profiles lists profiles', async () => {
    const response = await request(app).get('/api/profiles?page=1&limit=10');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});