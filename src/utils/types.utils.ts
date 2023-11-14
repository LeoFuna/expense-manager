import { z } from "zod";
import { createTransactionFormSchema } from "./validation.utils";

export type TransactionFormType = z.infer<typeof createTransactionFormSchema>;