'use client'
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { TransactionFormType } from "@/utils/types.utils";
import { UseFormRegister } from "react-hook-form";

type TransactionAmountInputProps = {
  operationType: ITransactionCategory['operationType'];
  register: UseFormRegister<TransactionFormType>;
}

export default function TransactionAmountInput({
  operationType,
  register,
}: TransactionAmountInputProps) {
  const getBgColor = ({ operationType }: Pick<ITransactionCategory, 'operationType'>) => {
    if (operationType === 'income') return 'bg-success-100';
    return 'bg-danger-100';
  }

  return (
    <input
      className={`text-light-100 title-x text-[50px]
        focus:outline-none placeholder:text-light-100
        w-full ${getBgColor({ operationType })}
      `}
      type="number"
      placeholder="0"
      id="transaction-value"
      {...register('amount')}
    />
  )
}