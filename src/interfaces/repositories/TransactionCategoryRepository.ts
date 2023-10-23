import { ITransactionCategory } from "../TransactionCategory";

export interface ITransactionCategoryRepo {
  index(operationType?: ITransactionCategory['operationType']): Promise<ITransactionCategory[]>;
  show(id: string): Promise<ITransactionCategory | null>;
}