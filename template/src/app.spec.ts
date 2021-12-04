import request from 'supertest';
import { app } from './app';

describe('app', () => {
  it('is OK', async () => {
    let response = await request(app).get('/');
    expect(response.text).toBe('OK');
  });
});
