'use client'
import Navigation from "@/components/transactions/new/Navigation";

const getBgColor = (type?: string) => {
  if (type === 'income') return 'bg-success-100';
  return 'bg-danger-100';
}
const getNavTitle = (type?: string) => {
  if (type === 'income') return 'Nova Entrada';
  return 'Nova Saída';
}

export default function NewTransaction({ searchParams }: { searchParams: { type?: string } }) {  
  return (
    <main className="flex flex-col items-center h-screen">
      <div
        className={`w-screen max-w-md h-full ${getBgColor(searchParams?.type)}`}
      >
        <Navigation title={getNavTitle(searchParams?.type)} />
      </div>
    </main>
  )
}