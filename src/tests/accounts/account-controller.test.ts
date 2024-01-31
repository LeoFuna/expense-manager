import AccountController from '@/controllers/AccountController';
import { IAccount } from '@/interfaces/Account';
import MockAccountService from './mocks/MockedAccountService';

jest.mock('./mocks/MockedAccountService');

describe('Account Controller', () => {
  describe('Create method', () => {
    test('should create with valid body', async () => {
      const validCreateBody: IAccount = {
        balanceInCents: 0,
        email: 'fake-email@example.com',
        monthInNumber: 2,
      }
      const accountService = new MockAccountService();
      (accountService.create as jest.Mock).mockImplementation(() => {
        return Promise.resolve(validCreateBody);
      })
      const accountController = new AccountController(accountService);

      const request: any = {
        body: JSON.stringify(validCreateBody),
        json: async () => validCreateBody,
      };
      const nextResponse: any = {}
      const response = await accountController.create(request, nextResponse);
  
      expect(response.status).toBe(201);
      expect(response.json()).resolves.toEqual(validCreateBody);
    });

    test('should throws an error on invalid body', async () => {
      const accountService = new MockAccountService();

      (accountService.create as jest.Mock).mockImplementation(() => {
        return Promise.reject('Fake error message...');
      });

      const accountController = new AccountController(accountService);
      const invalidCreateBody: any = {
        balanceInCents: 0,
        email: 'fake-email@example.com',
      }

      const request: any = {
        body: JSON.stringify(invalidCreateBody),
        json: async () => invalidCreateBody,
      };
      const nextResponse: any = {}
      
      let response: any;
      try {
        response = await accountController.create(request, nextResponse);
      } catch (error: any) {
        response = new Error(error);
      }

      expect(response).toBeInstanceOf(Error);
    })
  })
})