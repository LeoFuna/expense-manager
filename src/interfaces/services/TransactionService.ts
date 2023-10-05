import { ITransaction } from "../Transaction";

export type TransactionToCreate = Omit<ITransaction, "id" | "accountId" | "operationType" | "monthInNumber">;

export interface ITransactionService {
  index(email: string, month: number, year: number): Promise<ITransaction[]>;
  create(email: string, transaction: TransactionToCreate): Promise<{id: string}>;
  getBalance(email: string, month: number, year: number): Promise<{ totalIncomeInCents: number; totalOutcomeInCents: number; }>;
}