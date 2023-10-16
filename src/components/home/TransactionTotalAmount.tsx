'use client'

import { useDateContext } from "@/contexts/dateContext"
import { useFetch } from "@/hooks/fetch";
import { useState } from "react"

export default function TransactionTotalBalance({ type, email }: { type: 'totalIncomeInCents' | 'totalOutcomeInCents', email: string }) {
  const dateContext = useDateContext();
  const [totalAmount, setTotalAmount] = useState(0);

  useFetch({
    url: `api/transactions/${email}/balance`,
    onSuccess: (data) => setTotalAmount(data[type] / 100),
    dependencies: [dateContext.date],
    params: {
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    }
  })

  return (
    <p className='title-2 text-sm'>R$ {totalAmount}</p>
  )
}