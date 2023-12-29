'use client'
import { Button } from "@/components/core/Button";
import { Spinner } from "@/components/core/Spinner";
import { useFetch } from "@/hooks/fetch";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { TransactionFormType } from "@/utils/types.utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

/*
  - Anexo: TO DO: inicialmente nao tera mas planejaremos
*/

type TransactionDetailsProps = {
  operationType: ITransactionCategory['operationType'];
  register: UseFormRegister<TransactionFormType>;
  onSubmit: () => void;
  errors: FieldErrors<TransactionFormType>;
  isSubmitting: boolean;
}

export default function TransactionDetails({
  operationType,
  register,
  onSubmit,
  errors,
  isSubmitting,
}: TransactionDetailsProps) {
  const { data } = useFetch({
    url: '/api/transaction-categories',
    params: {
      operationType,
    },
    dependencies: [operationType],
  });

  return (
    <div className="absolute flex flex-col p-4 py-9 h-[65%] rounded-t-3xl w-full bottom-0 left-0 right-0 bg-light-100">
      <div className="flex flex-col gap-4 h-4/5">
        <select
          className="bg-light-100 text-light-20 border-light-40 border p-4 rounded-xl"
          {...register('category')}
          id="category"
        >
          <option value="0">Categoria</option>
          {data?.map((category: ITransactionCategory) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          className="text-light-20 border-light-40 border p-3 rounded-xl"
          type="text"
          {...register('description')}
          id="description"
          placeholder="Descrição"
        />
        {!!errors?.description && <p className="text-warning-100 text-sm">{errors.description.message}</p>}
      </div>
      <Button 
        onClick={onSubmit}
        disabled={isSubmitting || !!Object.keys(errors).length}
      >
        {isSubmitting ? <Spinner /> : 'Salvar'}
      </Button>
    </div>
  )
}
