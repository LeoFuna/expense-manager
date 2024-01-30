import AccountController from '@/controllers/AccountController';
import { IAccount } from '@/interfaces/Account';
import { describe, test, expect, jest } from '@jest/globals';
import MockAccountService from './mocks/MockedAccountService';

describe('Account Controller', () => {
  describe('Create method', () => {
    test('should create with valid body', async () => {
      const accountService = new MockAccountService();
      const accountController = new AccountController(accountService);
      const validCreateBody: IAccount = {
        balanceInCents: 0,
        email: 'fake-email@example.com',
        monthInNumber: 2,
      }
  
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
      jest.mock('./mocks/MockedAccountService');

      MockAccountService.prototype.create = jest.fn(async (body: IAccount): Promise<IAccount> => {
        return Promise.reject('Fake error message...');
      });
      const accountService = new MockAccountService();
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