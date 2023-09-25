export interface ITransaction {
  id?: string;
  accountId: string;
  amountInCents: number;
  operationType: 'income' | 'outcome';
  description?: string;
  categoryId: string;
  attachment?: string;
  createdAt: Date;
}