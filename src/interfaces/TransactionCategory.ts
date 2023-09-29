export interface ITransactionCategory {
  id?: string;
  name: string;
  iconName: 'shopping' | 'food' | 'salary' | 'energy' | 'internet' | 'health' | 'other';
  operationType: 'income' | 'outcome';
}