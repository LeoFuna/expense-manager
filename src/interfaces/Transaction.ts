export interface ITransaction {
  id?: string;
  amountInCents: number;
  operationType: 'income' | 'outcome';
  description?: string;
  categoryId: string;
  attachment?: string;
  createdAt: string;
  monthInNumber: number;
}