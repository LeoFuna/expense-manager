import Navigation from "@/components/transactions/new/Navigation";
import TransactionAmount from "@/components/transactions/new/TransactionAmount";
import TransactionDetails from "@/components/transactions/new/TransactionDetails";
import { DateContextProvider } from "@/contexts/dateContext";

const getBgColor = (type: string) => {
  if (type === 'income') return 'bg-success-100';
  return 'bg-danger-100';
}
const getNavTitle = (type: string) => {
  if (type === 'income') return 'Nova Entrada';
  return 'Nova Saída';
}

export default function NewTransaction({ searchParams }: { searchParams: { type: 'income' | 'outcome' } }) {  
  return (
    <main className="flex flex-col items-center h-screen">
      <DateContextProvider>
        <div
          className={`
            w-screen relative max-w-md h-full
            ${getBgColor(searchParams?.type)}
            border-x border-dark-25
          `}
        >
          <Navigation title={getNavTitle(searchParams?.type)} />
          <TransactionAmount type={searchParams.type} />
          <TransactionDetails />
        </div>
      </DateContextProvider>
    </main>
  )
}