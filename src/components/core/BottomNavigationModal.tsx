'use client'
import { useRouter } from "next/navigation";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

type ModalButtonProps = {
  children: React.ReactElement;
  className?: string;
  onClick?: () => void;
}

const ModalButton = ({
  children,
  className = 'bg-success-100',
  onClick
  }: ModalButtonProps) => {
  return (
    <button
      className={`
        flex justify-center mb-5 items-center
        text-light-100 w-12 h-12 rounded-full
        ${className}
      `}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default function BottomNavigationModal() {
  const router = useRouter();

  return (
    <div className='flex gap-20 justify-center items-end fixed bottom-20 z-50 bg-light-20 bg-opacity-20 h-screen w-screen max-w-md'>
      <ModalButton onClick={() => router.push('/transactions/new?operationType=income')}>
        <FiTrendingUp size={24} />
      </ModalButton>
      <ModalButton onClick={() => router.push('/transactions/new?operationType=outcome')}  className="bg-danger-100" >
        <FiTrendingDown size={24} />
      </ModalButton>
    </div>
  )
}