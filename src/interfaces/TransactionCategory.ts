export interface ITransactionCategory {
  id?: string;
  name: string;
  icon: string;
  operationType: 'income' | 'outcome';
}