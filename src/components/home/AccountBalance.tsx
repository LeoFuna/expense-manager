'use client'

import { useDateContext } from "@/contexts/dateContext";
import { useFetch } from "@/hooks/fetch";
import { useState } from "react";

export default function AccountBalance({ email }: { email: string }) {
  const dateContext = useDateContext();
  const [accountBalance, setAccountBalance] = useState(0);

  useFetch({
    url: `/api/accounts/${email}/monthBudget`,
    onSuccess: (data) => setAccountBalance(data?.balance ? data.balance : 0),
    dependencies: [dateContext.date],
    params: {
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    }
  });

  return (
    <h3 className="title-1 text-dark-75">R$ {accountBalance}</h3>
  )
}