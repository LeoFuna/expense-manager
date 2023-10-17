'use client'
import TransactionCard from "../core/TransactionCard";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { useDateContext } from "@/contexts/dateContext";
import { getFullTime } from "@/utils/date.utils";
import { useFetch } from "@/hooks/fetch";

interface ITransactionApi extends ITransaction {
  category: ITransactionCategory;
}

export default function RecentTransactions({ email }: { email: string }) {
  const dateContext = useDateContext();

  const { data: transactions } = useFetch({
    url: `/api/transactions/${email}`,
    dependencies: [dateContext.date],
    params: {
      fullYear: String(dateContext.date.getFullYear()),
      month: String(dateContext.date.getMonth())
    }
  })

  return (
    <div className='flex flex-col w-screen px-4 gap-2'>
      <section className="flex justify-between items-center">
        <h1 className='title-3 text-dark-75'>Transações Recentes</h1>
        <button className='bg-primary-20 text-primary-100 px-4 py-2 rounded-xl'>
          Ver Todas
        </button>
      </section>
      <section className='flex flex-col items-between gap-7 h-[53vh] py-4 overflow-y-scroll scrollbar-hidden'>
        {transactions?.map((transaction: ITransactionApi, index: number) => 
          <TransactionCard
            key={index}
            title={transaction.category.name}
            description={transaction.description || ''}
            amount={transaction.amountInCents / 100}
            date={getFullTime(new Date(transaction.createdAt))}
            iconName={transaction.category.iconName}
          />
          )}
        {/* Divider to help on scroll and footer interaction   */}
        <div className="p-6" />
      </section>
    </div>
  )
}