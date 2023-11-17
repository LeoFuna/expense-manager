'use client'

import { ITransactionCategory } from "@/interfaces/TransactionCategory"
import TransactionAmount from "./TransactionAmount"
import TransactionDetails from "./TransactionDetails"
import { useForm, useFormState } from "react-hook-form"
import { TransactionToCreate } from "@/interfaces/services/TransactionService"
import { getLocaleISOString } from "@/utils/date.utils"
import FullPageDialog from "@/components/core/FullPageDialog"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
import { createTransactionFormSchema } from "@/utils/validation.utils"
import { TransactionFormType } from "@/utils/types.utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSubmitting } from "@/hooks/core"

type TransactionFormProps = {
  urlParams: {
    operationType: ITransactionCategory['operationType'];
  }
  email?: string | null;
}

const getDialogInfos = (hadError: boolean) => {
  if (hadError) {
    return {
      icon: <FaTimesCircle size={40} />,
      message: 'Ops, Erro na operação...',
    }
  }
  return {
    icon: <FaCheckCircle size={40} />,
    message: 'Operação realizada com sucesso!',
  }
}

export default function TransactionForm({
  urlParams,
  email,
}: TransactionFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TransactionFormType>({
    resolver: zodResolver(createTransactionFormSchema),
  });
  const { isSubmitting, submit } = useSubmitting();
  const [ openDialog, setOpenDialog ] = useState(false);
  const [hadError, setHadError] = useState(false);
  
  const createTransaction = async (formData: any): Promise<void> => {
    const isIncome = urlParams.operationType === 'income';
    const amounInCents = Math.round(Number(formData.amount) * 100);

    const newTransaction: TransactionToCreate = {
      amountInCents: isIncome ? amounInCents : -amounInCents,
      categoryId: formData.category,
      description: formData.description,
      createdAt: getLocaleISOString(),
    }

    try {
      const dataFetched = await fetch(`/api/transactions/${email}`, {
        method: 'POST',
        body: JSON.stringify(newTransaction),
      });
      // https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
      if (!dataFetched.ok) throw new Error((await dataFetched.json())?.message);
      
      setHadError(false);
      reset();
    } catch (error: any) {
      setHadError(true)
    }
    setOpenDialog(true);
  }

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setOpenDialog(false);
      setHadError(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [openDialog])

  return (
    <>
      <form>
        <TransactionAmount
          operationType={urlParams.operationType}
          register={register}
          errors={errors}
        />
        <TransactionDetails
          isSubmitting={isSubmitting}
          operationType={urlParams.operationType}
          register={register}
          onSubmit={handleSubmit(
            (formData: any) => submit(createTransaction(formData))
          )}
          errors={errors}
        />
      </form>
      { openDialog && 
        <FullPageDialog>
          <div className="flex flex-col gap-4 justify-center items-center bg-light-100 p-7 m-5 rounded-2xl">
            <div className="text-primary-80">
              { getDialogInfos(hadError).icon }
            </div>
            <p className="text-center regular-s">
              { getDialogInfos(hadError).message }
            </p>
          </div>
        </FullPageDialog>
      }
    </>
  )
}