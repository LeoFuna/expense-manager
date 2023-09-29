import { ITransaction } from "../Transaction";

export interface ITransactionService {
  index(email: string): Promise<ITransaction[]>;
  create(email: string, transaction: ITransaction): Promise<ITransaction>;
  getTransactionBalance(email: string, month: number): Promise<{ totalIncomeInCents: number; totalOutcomeInCents: number; }>;
}