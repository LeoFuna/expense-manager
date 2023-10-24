import { ITransaction } from "../Transaction";

type TransactionsIndexOptions = {
  month: number;
  year: number;
  limit?: number;
}
export interface ITransactionRepository {
  index(email: string, options: TransactionsIndexOptions): Promise<ITransaction[]>;
  create(email: string, data: ITransaction): Promise<{id: string}>;
}