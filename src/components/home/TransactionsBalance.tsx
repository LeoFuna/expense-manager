import { IconType } from "react-icons";
import TransactionTotalBalance from "./TransactionTotalAmount";

type TransactionsBalanceProps = {
  title: string;
  Icon: IconType;
  color: 'red' | 'green' | 'yellow';
}

const getComponentColor = (color: TransactionsBalanceProps['color']) => {
  switch (color) {
    case 'red':
      return 'bg-danger-100 text-danger-100';
    case 'green':
      return 'bg-success-100 text-success-100';
    case 'yellow':
      return 'bg-warning-100 text-warning-100';
    default:
      return 'bg-success-100 text-success-100';
  }
}

export default function TransactionsBalance({ title, Icon, color }: TransactionsBalanceProps) {
  return (
    <div className={`flex items-center ${getComponentColor(color)} w-2/4 p-4 rounded-3xl gap-2`}>
      <div className={`bg-light-100 flex items-center w-12 h-12 p-2 rounded-xl`}>
        <Icon size={24} />
      </div>
      <div className='text-light-100 flex flex-col items-start gap-2 w-3/4'>
        <h4 className='regular-s'>{title}</h4>
        <TransactionTotalBalance type={ color === 'green' ? 'totalIncomeInCents' : 'totalOutcomeInCents' } />
      </div>
    </div>
  )
}