import { IAccount, IAccountApi } from "../Account";

export default interface IAccountRepository {
  index(): Promise<{ email: string }[]>;
  show(email: string, year: number, month: number): Promise<IAccountApi | null>;
  create(data: IAccount): Promise<IAccount>;
  update(email: string, data: {id: string, balanceInCents: number}, year: number): Promise<{id: string}>;
  verifyIfAccountExists(email: string): Promise<boolean>;
  getJointAccountOwner(email: string): Promise<string | null>;
}