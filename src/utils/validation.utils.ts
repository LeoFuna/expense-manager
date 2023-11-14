import { z } from 'zod';

export const createTransactionFormSchema = z.object({
  amount: z.string()
  .min(1, { message: 'Total da operação é obrigatório!' })
  .refine((amount) => Number(amount) > 0, { message: 'Operação deve ser maior do que zero!' }),
  description: z.string().min(1, { message: 'Descrição é obrigatória!' }),
  category: z.string(),
});