import { ITransaction } from "../Transaction";

export interface ITransactionRepository {
  index(email: string): Promise<ITransaction[]>;
  create(email: string, data: ITransaction): Promise<ITransaction>;
}