// tests/health.test.js

const request = require('supertest');
const app = require('../src/app');

describe('Health Check API', () => {
  it('should return server health', async () => {
    const res = await request(app).get('/api/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
