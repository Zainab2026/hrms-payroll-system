const request = require('supertest');
const app = require('../../backend/app');

describe('Payroll Engine Verification Gate', () => {
  it('Verifies calculation integrity for base shifts', async () => {
    const res = await request(app)
      .post('/api/payroll/calculate-shift')
      .send({ hourlyRate: 31.15, hoursWorked: 7.75 });
    
    expect(res.status).toBe(200);
    expect(res.body.netCalculation).toBe(241.41); // Ensures perfect rounding metrics
  });
});