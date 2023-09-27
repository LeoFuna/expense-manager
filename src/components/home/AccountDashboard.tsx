import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import RecentTransactions from './RecentTransactions';
import TransactionsBalance from './TransactionsBalance';

export default function AccountDashboard() {
  return (
    <section className="overflow-hidden px-4 py-4 flex flex-col items-center gap-7 w-screen">
      <div id='balance-div' className="flex flex-col items-center gap-2">
        <h2 className="regular-s text-light-20">Saldo da Conta</h2>
        <h3 className="title-1 text-dark-75">R$ 1.000,00</h3>
      </div>

      <div id='transactions-balance-div' className="flex justify-center w-full gap-4">
        <TransactionsBalance Icon={FiTrendingUp} title='Entradas' color='green' totalAmount={10000} />

        <TransactionsBalance Icon={FiTrendingDown} title='Saídas' color='red' totalAmount={8000} />
      </div>

      <RecentTransactions />
    </section>
  )
}