import { IAccount } from "../Account";

export default interface IAccountRepository {
  show(email: string): Promise<IAccount | null>;
  create(data: IAccount): Promise<IAccount>;
}