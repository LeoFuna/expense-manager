import { z } from 'zod';

export const createTransactionFormSchema = z.object({
  amount: z.string()
  .min(1, { message: 'Total da operação é obrigatório!' })
  .refine((amount) => Number(amount) > 0, { message: 'Operação deve ser maior do que zero!' }),
  description: z.string().min(1, { message: 'Descrição é obrigatória!' }),
  category: z.string(),
});

export const TransactionCreateSchema = z.object({
  amountInCents: z.number(),
  description: z.string().trim().optional(),
  categoryId: z.string().trim().min(1, { message: 'Categoria é obrigatória!' }),
  attachment: z.string().optional(),
  createdAt: z.string().min(1, { message: 'Data da operação é obrigatória!' }),
});

export const AccountCreateSchema = z.object({
  email: z.string().min(1, { message: 'Email é obrigatório!' }),
  name: z.string().optional(),
  balanceInCents: z.number().min(0, { message: 'Saldo inicial deve ser maior ou igual a zero!' }),
  monthInNumber: z.number()
    .refine((month) => month >= 0 && month <= 11, {
      message: 'Mês deve ser entre 0 e 11!'
    }),
});

export const UpdateAccountBalanceSchema = z.object({
  balanceInCents: z.number(),
});
