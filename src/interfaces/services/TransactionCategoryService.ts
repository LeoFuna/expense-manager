import { ITransactionCategory } from "../TransactionCategory";

export interface ITransactionCategoryService {
  show(id: string): Promise<ITransactionCategory | null>;
}