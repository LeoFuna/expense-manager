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

  const manageAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove all non-numeric characters
    const parsedValue = value.replace(/\D/g, '');
 
    const formattedValue = Number(parsedValue)/100;
    // Necessário para nao permitir que casos como: 0.5 ao inves de 0.50 sejam aceitos
    e.target.value = formattedValue.toFixed(2);
  }

  return (
    <input
      className={`text-light-100 title-x text-[50px]
        focus:outline-none placeholder:text-light-100
        w-full ${getBgColor({ operationType })}
      `}
      type="number"
      placeholder="0,00"
      id="transaction-value"
      {...register('amount', {
        onChange: (e) => manageAmountChange(e)
      })}
    />
  )
}