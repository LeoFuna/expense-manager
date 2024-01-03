'use client'

import { useDateContext } from "@/contexts/dateContext"
import { useFetch } from "@/hooks/fetch";
import Skeleton from "../core/Skeleton";

export default function TransactionTotalBalance({ type, email }: { type: 'totalIncomeInCents' | 'totalOutcomeInCents', email: string }) {
  const dateContext = useDateContext();

  const { data: totalAmountInCents, isValidating } = useFetch({
    url: `api/transactions/${email}/balance`,
    dependencies: [dateContext.date],
    params: {
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    }
  })

  if (isValidating) return <Skeleton className="bg-light-40" />
  
  return (
    <p className='title-2 text-sm'>
      R$ {totalAmountInCents ? totalAmountInCents[type] / 100 : 0}
    </p>
  )
}