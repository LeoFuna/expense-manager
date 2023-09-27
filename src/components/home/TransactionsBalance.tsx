import { IconType } from "react-icons";

type TransactionsBalanceProps = {
  title: string;
  totalAmount: number;
  Icon: IconType;
  color: 'red' | 'green' | 'yellow';
}

const getComponentColor = (color: TransactionsBalanceProps['color']) => {
  switch (color) {
    case 'red':
      return 'danger';
    case 'green':
      return 'success';
    case 'yellow':
      return 'warning';
    default:
      return 'success';
  }
}

export default function TransactionsBalance({ title, totalAmount, Icon, color }: TransactionsBalanceProps) {
  return (
    <div className={`flex items-center bg-${getComponentColor(color)}-100 w-2/4 p-4 rounded-3xl gap-2`}>
      <div className={`bg-light-100 flex items-center w-12 h-12 p-2 rounded-xl text-${getComponentColor(color)}-100`}>
        <Icon size={24} />
      </div>
      <div className='text-light-100 flex flex-col items-start gap-2 w-3/4'>
        <h4 className='regular-s'>{title}</h4>
        <p className='title-2 text-sm'>R$ {totalAmount}</p>
      </div>
    </div>
  )
}