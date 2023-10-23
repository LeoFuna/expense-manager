'use client'

import { ITransactionCategory } from "@/interfaces/TransactionCategory";

export default function TransactionAmountInput({ operationType }: Pick<ITransactionCategory, 'operationType'>) {
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
    />
  )
}