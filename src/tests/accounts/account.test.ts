// A importaçao do @jest/globals atualmente está gerando problemas,
// com isso estou usando de maneira global
// import { describe, test, expect, beforeAll, afterAll, afterEach, jest } from '@jest/globals';
import { createServer } from 'http';
import { POST } from '@/app/api/accounts/route';
import supertest from 'supertest';
import { IAccount } from '@/interfaces/Account';
import { addDoc } from 'firebase/firestore';
import { getToken } from 'next-auth/jwt';

let app: any;
beforeAll(() => {
  app = createServer(async (req: any, res: any) => {
    // TO DO: Lembrar que esse caso já se subentender que o método é POST
    // Buscar permitir outros métodos, se necessário!
    req.on('data', (chunk: any) => {
      req.body = chunk.toString();
    })

    req.on('end', async () => {
      const reqWithJson = {
        ...req,
        json: async () => {
          return JSON.parse(req.body)
        }
      }

      const response = await POST(reqWithJson, res);
      res.writeHead(response.status, response.headers);
      res.end(await response.text());
    })
  }).listen(3000);
});

afterAll(() => {  
  app.close(); 
})

jest.mock('next-auth/jwt', () => {
  const originalModule: any = jest.requireActual('next-auth/jwt');
  return {
    __esModule: true,
    ...originalModule,
    getToken: jest.fn(),
  }
});

jest.mock('firebase/firestore', () => {
  const originalModule: any = jest.requireActual('firebase/firestore');
  return {
    __esModule: true,
    ...originalModule,
    addDoc: jest.fn(),
  }
});

// jest.mock('@/db/firebase-admin', () => {
//   return { dbAdmin: jest.fn() }
// });

describe('Account API', () => {
  describe('Create account', () => {
    test('should block non authorized users', async () => {
      (getToken as jest.Mock).mockImplementation(() => Promise.resolve(null));
      const response = await supertest(app)
        .post('/api/accounts')
        .send({ email: 'fake-email@email.com' })
        .expect(401);

      expect(response.status).toBe(401);
      expect(JSON.parse(response.text)).toEqual({ message: 'Not authorized' });
    });

    test('should have 400 status with ZodError on invalid body', async () => {
      (getToken as jest.Mock).mockImplementation(() => Promise.resolve('valid-jwt-token'));
      const invalidPayload: any = {
        balanceInCents: 0,
        email: 'fake-email@gmail.com',
      }

      const response = await supertest(app)
        .post('/api/accounts')
        .send(invalidPayload)
        .set('Accept', 'application/json')
        .expect(400)

      expect(JSON.parse(response?.text)?.name).toEqual('ZodError');   
    });

    test('should create an account on valid data', async () => {
      (getToken as jest.Mock).mockImplementation(() => Promise.resolve('valid-jwt-token'));
      (addDoc as jest.Mock).mockImplementation(() => Promise.resolve({ id: 'fake-id' }));
 
      const validPayload: IAccount = {
        balanceInCents: 0,
        email: 'fake-email@gmail.com',
        monthInNumber: 2
      }
      const response = await supertest(app)
        .post('/api/accounts')
        .send(validPayload)
        .set('Accept', 'application/json')
        .expect(201);

      expect(response.status).toBe(201);
      expect(JSON.parse(response.text)).toEqual(validPayload);
    });
  })
})