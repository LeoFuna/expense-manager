import TransactionAmountInput from "./TransactionAmountInput";

export default function TransactionAmount({ type }: { type: 'income' | 'outcome' }) {
  return (
    <div className="flex flex-col gap-3 px-6 pt-14">
      <h2 className="title-3 text-light-80 opacity-80">Qual valor?</h2>
      <div className="flex gap-2 items-center">
        <h1 className="text-light-100 title-x">R$</h1>
        <TransactionAmountInput type={type} />
      </div>
    </div>
  )
}