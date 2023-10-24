import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import TransactionAmountInput from "./TransactionAmountInput";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TransactionAmountProps = {
  operationType: ITransactionCategory['operationType'];
  register: UseFormRegister<FieldValues>;
}

export default function TransactionAmount({
  operationType,
  register,
}: TransactionAmountProps) {
  return (
    <div className="flex flex-col gap-3 px-6 pt-14">
      <h2 className="title-3 text-light-80 opacity-80">Qual valor?</h2>
      <div className="flex gap-2 items-center">
        <h1 className="text-light-100 title-x">R$</h1>
        <TransactionAmountInput
          operationType={operationType}
          register={register}
        />
      </div>
    </div>
  )
}