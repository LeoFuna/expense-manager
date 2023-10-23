'use client'

import { ITransactionCategory } from "@/interfaces/TransactionCategory"
import TransactionAmount from "./TransactionAmount"
import TransactionDetails from "./TransactionDetails"
import { useForm } from "react-hook-form"
import { TransactionToCreate } from "@/interfaces/services/TransactionService"

type TransactionFormProps = {
  urlParams: {
    operationType: ITransactionCategory['operationType'];
  }
  email?: string | null;
}

export default function TransactionForm({
  urlParams,
  email,
}: TransactionFormProps) {
  const { register, handleSubmit } = useForm();
  
  const createTransaction = (formData: any) => {
    const isIncome = urlParams.operationType === 'income';
    const amounInCents = Number(formData.amount) * 100;
    const newTransaction: TransactionToCreate = {
      amountInCents: isIncome ? amounInCents : -amounInCents,
      categoryId: formData.category,
      description: formData.description,
      createdAt: new Date().toISOString(),
    }
    // TO DO: criar o caso de sucesso e falhas
    fetch(`/api/transactions/${email}`, {
      method: 'POST',
      body: JSON.stringify(newTransaction),
    });
  }

  return (
    <form>
      <TransactionAmount
        operationType={urlParams.operationType}
        register={register}
      />
      <TransactionDetails
        operationType={urlParams.operationType}
        register={register}
        onSubmit={handleSubmit(createTransaction)} 
      />
    </form>
  )
}