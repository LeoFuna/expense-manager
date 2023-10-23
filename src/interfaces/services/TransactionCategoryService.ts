import { ITransactionCategory } from "../TransactionCategory";

export interface ITransactionCategoryService {
  index(operationType: ITransactionCategory['operationType']): Promise<ITransactionCategory[]>;
  show(id: string): Promise<ITransactionCategory | null>;
}