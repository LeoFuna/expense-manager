import { IAccount } from "@/interfaces/Account";
import { IAccountService } from "@/interfaces/services/AccountService";

export default class MockAccountService implements IAccountService {
  create(data: IAccount): Promise<IAccount> {
    console.log('to passando na implementaçao')
    return Promise.resolve(data);
  }
  checkIfIsANewUser(email: string): Promise<boolean> {
    return Promise.resolve(true);
  }
  getJointAccountOwner(email: string): Promise<string | null> {
    return Promise.resolve(null)
  }
  createMonthAccounts(): Promise<{ message: string; }> {
    return Promise.resolve({ message: 'ok' })
  }
  show(email: string, year: number, month: number): Promise<{ id: string; balance: number; } | null> {
    return Promise.resolve({ id: '1', balance: 0 })
  }
  update(email: string, data: IAccount, year: number, month: number): Promise<{ id: string; } | null> {
    return Promise.resolve({ id: '1' })
  }
}