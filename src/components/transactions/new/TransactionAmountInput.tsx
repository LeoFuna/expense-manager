'use client'

export default function TransactionAmountInput({ type }: { type: 'income' | 'outcome' }) {
  const getBgColor = (type: string) => {
    if (type === 'income') return 'bg-success-100';
    return 'bg-danger-100';
  }

  return (
    <input
      className={`text-light-100 title-x text-[50px]
        focus:outline-none placeholder:text-light-100
        w-full ${getBgColor(type)}
      `}
      type="number"
      placeholder="0"
      id="transaction-value"
    />
  )
}