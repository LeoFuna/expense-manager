import { ITransaction } from "../Transaction";

export interface ITransactionRepository {
  index(email: string): Promise<ITransaction[]>;
}