import { IAccount } from "../Account";

export interface IAccountService {
  show(email: string): Promise<IAccount>;
  create(data: IAccount): Promise<IAccount>;
}