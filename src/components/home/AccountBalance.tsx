'use client'

import { useDateContext } from "@/contexts/dateContext";
import { useFetch } from "@/hooks/fetch";
import { Spinner } from "../core/Spinner";

export default function AccountBalance({ email }: { email: string }) {
  const dateContext = useDateContext();

  const { data, isValidating } = useFetch({
    url: `/api/accounts/${email}/monthBudget`,
    dependencies: [dateContext.date],
    params: {
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    }
  });

  if (isValidating) return <Spinner />

  return (
    <h3 className="title-1 text-dark-75">R$ {data?.balance || 0}</h3>
  )
}