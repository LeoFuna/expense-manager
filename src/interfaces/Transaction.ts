export interface ITransaction {
  accountId: string;
  amountInCents: number;
  operationType: 'income' | 'outcome';
  description?: string;
  categoryId: string;
  attachment?: string;
  createdAt: Date;
}