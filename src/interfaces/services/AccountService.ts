import { IAccount } from "../Account";

export interface IAccountService {
  show(email: string, year: number, month: number): Promise<{ balance: number } | null>;
  create(data: IAccount): Promise<IAccount>;
  checkIfIsANewUser(email: string): Promise<boolean>;
}