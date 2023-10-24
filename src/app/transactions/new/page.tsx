import Navigation from "@/components/transactions/new/Navigation";
import TransactionForm from "@/components/transactions/new/TransactionForm";
import { DateContextProvider } from "@/contexts/dateContext";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { getServerSession } from "next-auth";

const getBgColor = (type: string) => {
  if (type === 'income') return 'bg-success-100';
  return 'bg-danger-100';
}
const getNavTitle = (type: string) => {
  if (type === 'income') return 'Nova Entrada';
  return 'Nova Saída';
}

export default async function NewTransaction({
  searchParams
}: { searchParams: Pick<ITransactionCategory, 'operationType'> }) {  
  const session = await getServerSession();
  return (
    <main className="flex flex-col items-center h-screen">
      <DateContextProvider>
        <div
          className={`
            w-screen relative max-w-md h-full
            ${getBgColor(searchParams.operationType)}
            border-x border-dark-25
          `}
        >
          <Navigation title={getNavTitle(searchParams.operationType)} />
          <TransactionForm
            urlParams={searchParams}
            email={session?.user?.email}
          />
        </div>
      </DateContextProvider>
    </main>
  )
}