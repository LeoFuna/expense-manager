'use client'

import { ITransactionCategory } from "@/interfaces/TransactionCategory"
import TransactionAmount from "./TransactionAmount"
import TransactionDetails from "./TransactionDetails"
import { useForm } from "react-hook-form"
import { TransactionToCreate } from "@/interfaces/services/TransactionService"
import { getLocaleISOString } from "@/utils/date.utils"
import FullPageDialog from "@/components/core/FullPageDialog"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import { useState } from "react"

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
  const { register, handleSubmit, reset } = useForm();
  const [ openDialog, setOpenDialog ] = useState(false);
  const [hadError, setHadError] = useState(false);
  
  const createTransaction = (formData: any) => {
    const isIncome = urlParams.operationType === 'income';
    const amounInCents = Number(formData.amount) * 100;

    const newTransaction: TransactionToCreate = {
      amountInCents: isIncome ? amounInCents : -amounInCents,
      categoryId: formData.category,
      description: formData.description,
      createdAt: getLocaleISOString(),
    }

    fetch(`/api/transactions/${email}`, {
      method: 'POST',
      body: JSON.stringify(newTransaction),
    })
    .then(() => setHadError(false))
    .catch(() => setHadError(true))
    .finally(() => {
      setOpenDialog(true);
      reset();
    });
  }

  return (
    <>
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