import { IAccount } from "../Account";

export interface IAccountService {
  update(email: string, data: IAccount, year: number, month: number): Promise<{ id: string } | null>;
  show(email: string, year: number, month: number): Promise<{ id: string, balance: number } | null>;
  create(data: IAccount): Promise<IAccount>;
  checkIfIsANewUser(email: string): Promise<boolean>;
  createMonthAccounts(): Promise<IAccount[]>;
  getJointAccountOwner(email: string): Promise<string | null>;
}