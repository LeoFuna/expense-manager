import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import {
  FaShoppingBag, FaUtensils, FaLightbulb, FaImage, FaMoneyBill, FaPills,
  FaGifts, FaToolbox
} from "react-icons/fa";

type TransactionCardProps = {
  title: string;
  description: string;
  amount: number;
  date: string;
  iconName?: ITransactionCategory['iconName'];
}

const getReactIcon = (iconName?: string) => {
  switch (iconName) {
    case 'shopping':
      return <FaShoppingBag size={24} />;
    case 'food':
      return <FaUtensils size={24} />;
    case 'energy':
      return <FaLightbulb size={24} />;
    case 'salary':
      return <FaMoneyBill size={24} />;
    case 'remedy':
      return <FaPills size={24} />;
    case 'gift':
      return <FaGifts size={24} />;
    case 'others':
      return <FaToolbox size={24} />;
    default:
      return <FaImage size={24} />;
  }
}

export default function TransactionCard({ title, description, amount, date, iconName }: TransactionCardProps) {
  const getPriceColor = () => amount < 0 ? 'text-danger-100' : 'text-success-100';
  return (
    <div className='flex justify-between'>
      <div className="bg-primary-20 flex items-center justify-center w-12 h-12 rounded-xl text-primary-100">
        {getReactIcon(iconName)}
      </div>
      <div className='flex flex-col justify-between w-5/12'>
        <h1 className='regular-l'>
          {title}
        </h1>
        <h3 className='regular-xs text-light-20'>
          {description}
        </h3>
      </div>
      <div className='flex flex-col justify-between items-end w-4/12'>
        <h1 className={`regular-l ${getPriceColor()}`}>
          R$ {amount.toFixed(2)}
        </h1>
        <h3 className='regular-xs text-light-20'>
          {date}
        </h3>
      </div>
   </div>
  )
}