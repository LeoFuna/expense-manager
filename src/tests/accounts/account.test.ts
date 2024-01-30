import { describe, test, expect, jest, beforeAll, afterAll } from '@jest/globals';
import { createServer } from 'http';
import { POST } from '@/app/api/accounts/route';
import supertest from 'supertest';

let app: any;
beforeAll(() => {
  app = createServer(async (req: any, res: any) => {
    const reqWithJson = {
      ...req,
      json: async () => {
        return req.body
      }
    }
    const response = await POST(reqWithJson, res);
    res.writeHead(response.status, response.headers);
    res.end(await response.text());
  }).listen(3000);
});

afterAll(() => {  
  app.close(); 
})

describe('Account API', () => {
  describe('Create account', () => {
    test('should block non authorized users', async () => {
      jest.mock('@/utils/middleware.utils', () => {
        const originalModule: any = jest.requireActual('@/utils/middleware.utils');
        return {
          __esModule: true,
          ...originalModule,
          authorized: jest.fn(async () => false),
        }
      })
      const response = await supertest(app)
        .post('/api/accounts')
        .send({ email: 'fake-email@email.com' })
        .expect(401);

      expect(response.status).toBe(401);
      expect(JSON.parse(response.text)).toEqual({ message: 'Not authorized' });
    });
    test.todo('should throws an error on invalid body');
    test.todo('should create an account on valid data');
  })
})