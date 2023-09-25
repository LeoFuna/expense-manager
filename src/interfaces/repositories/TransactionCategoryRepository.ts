import { ITransactionCategory } from "../TransactionCategory";

export interface ITransactionCategoryRepo {
  show(id: string): Promise<ITransactionCategory | null>;
}