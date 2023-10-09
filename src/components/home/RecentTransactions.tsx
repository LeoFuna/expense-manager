'use client'
import TransactionCard from "../core/TransactionCard";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { useEffect, useState } from "react";
import { useDateContext } from "@/contexts/dateContext";

interface ITransactionApi extends ITransaction {
  category: ITransactionCategory;
}

export default function RecentTransactions({ email }: { email: string }) {
  const dateContext = useDateContext();
  const [transactions, setTransactions] = useState<ITransactionApi[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams({
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    })
    fetch(`/api/transactions/${email}?${urlParams}`)
    .then(response => response.json())
    .then(data => setTransactions(data))
  }, [dateContext.date])

  return (
    <div className='flex flex-col w-screen px-4 gap-2'>
      <section className="flex justify-between items-center">
        <h1 className='title-3 text-dark-75'>Transações Recentes</h1>
        <button className='bg-primary-20 text-primary-100 px-4 py-2 rounded-xl'>
          Ver Todas
        </button>
      </section>
      <section className='flex flex-col items-between gap-7 h-[53vh] py-4 overflow-y-scroll scrollbar-hidden'>
        {transactions.map((transaction, index) => 
          <TransactionCard
            key={index}
            title={transaction.category.name}
            description="Dia a dia"
            amount={transaction.amountInCents / 100}
            date="10:00"
            iconName={transaction.category.iconName}
          />
          )}
        {/* Divider to help on scroll and footer interaction   */}
        <div className="p-6" />
      </section>
    </div>
  )
}