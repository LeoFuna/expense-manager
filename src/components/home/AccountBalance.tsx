'use client'

import { DateContext } from "@/contexts/dateContext";
import { useContext, useEffect, useState } from "react";

export default function AccountBalance({ email }: { email: string }) {
  const dateContext = useContext(DateContext);
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams({
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    })
    fetch(`/api/accounts/${email}/monthBudget?${urlParams}`)
    .then(response => response.json())
    .then(data => setAccountBalance(data?.balance ? (data.balance / 100) : 0))
  }, [dateContext.date])

  return (
    <h3 className="title-1 text-dark-75">R$ {accountBalance}</h3>
  )
}