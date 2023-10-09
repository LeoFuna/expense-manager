'use client'

import { useDateContext } from "@/contexts/dateContext"
import { useEffect, useState } from "react"

export default function TransactionTotalBalance({ type, email }: { type: 'totalIncomeInCents' | 'totalOutcomeInCents', email: string }) {
  const dateContext = useDateContext();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams({
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    });

    fetch(`api/transactions/${email}/balance?${urlParams}`, { cache: 'no-cache' })
      .then(res => res.json())
      .then(data => setTotalAmount(data[type] / 100))
  }, [dateContext.date])

  return (
    <p className='title-2 text-sm'>R$ {totalAmount}</p>
  )
}