import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import TransactionAmountInput from "./TransactionAmountInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TransactionFormType } from "@/utils/types.utils";

type TransactionAmountProps = {
  operationType: ITransactionCategory['operationType'];
  register: UseFormRegister<TransactionFormType>;
  errors: FieldErrors<TransactionFormType>
}

export default function TransactionAmount({
  operationType,
  register,
  errors
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
      {!!errors?.amount && <p className="text-warning-100 text-sm">{errors.amount.message}</p>}
    </div>
  )
}