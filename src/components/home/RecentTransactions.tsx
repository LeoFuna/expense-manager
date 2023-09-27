import TransactionCard from "../core/TransactionCard";

const mockedTransactions = [
  { title: 'Mercado', amount: -40.32, iconName: 'food' },
  { title: 'Roupas', amount: -31.02, iconName: 'shopping' },
  { title: 'Lazer', amount: -20.00, iconName: 'shopping' },
  { title: 'Salário', amount: 1000.00, iconName: 'income' },
  { title: 'Freela', amount: 500.00, iconName: 'income' },
  { title: 'Internet', amount: -129.00, iconName: 'energy' },
]

export default function RecentTransactions() {
  return (
    <div className='flex flex-col w-screen px-4 gap-2'>
      <section className="flex justify-between items-center">
        <h1 className='title-3 text-dark-75'>Transações Recentes</h1>
        <button className='bg-primary-20 text-primary-100 px-4 py-2 rounded-xl'>
          Ver Todas
        </button>
      </section>
      <section className='flex flex-col items-between gap-7 h-[48vh] py-4 overflow-y-scroll scrollbar-hidden'>
        {mockedTransactions.map((transaction, index) => 
          <TransactionCard
            key={index}
            title={transaction.title}
            description="Dia a dia"
            amount={transaction.amount}
            date="10:00"
            iconName={transaction.iconName}
          />
        )}
      </section>
    </div>
  )
}