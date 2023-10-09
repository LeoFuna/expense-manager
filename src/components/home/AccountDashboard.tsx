'use client'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import RecentTransactions from './RecentTransactions';
import TransactionsBalance from './TransactionsBalance';
import AccountBalance from './AccountBalance';

export default function AccountDashboard({ email }: { email: string }) {
  return (
    <section className="overflow-hidden px-4 py-4 flex flex-col items-center gap-7 w-screen">
      <div id='balance-div' className="flex flex-col items-center gap-2">
        <h2 className="regular-s text-light-20">Saldo da Conta</h2>
        <AccountBalance email={email || ''} />
      </div>

      <div id='transactions-balance-div' className="flex justify-center w-full gap-4">
        <TransactionsBalance
          Icon={FiTrendingUp}
          title='Entradas'
          color='green'
        />

        <TransactionsBalance
          Icon={FiTrendingDown}
          title='Saídas'
          color='red'
        />
      </div>

      <RecentTransactions
        email={email || ''}
      />
    </section>
  )
}