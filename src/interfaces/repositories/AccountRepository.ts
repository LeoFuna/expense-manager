import { IAccount } from "../Account";

export default interface IAccountRepository {
  show(email: string, year: number, month: number): Promise<IAccount | null>;
  create(data: IAccount): Promise<IAccount>;
  verifyIfAccountExists(email: string): Promise<boolean>;
}