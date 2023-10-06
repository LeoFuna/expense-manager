'use client'

import { DateContext } from "@/contexts/dateContext"
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react"

export default function TransactionTotalBalance({ type }: { type: 'totalIncomeInCents' | 'totalOutcomeInCents' }) {
  const dateContext = useContext(DateContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const { data } = useSession();

  useEffect(() => {
    const urlParams = new URLSearchParams({
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    });

    fetch(`api/transactions/${data?.user?.email}/balance?${urlParams}`, { cache: 'no-cache' })
      .then(res => res.json())
      .then(data => setTotalAmount(data[type] / 100))
  }, [dateContext.date])

  return (
    <p className='title-2 text-sm'>R$ {totalAmount}</p>
  )
}