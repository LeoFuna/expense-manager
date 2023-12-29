'use client';
import { usePathname, useRouter } from 'next/navigation';
import { FaHouse, FaPlus, FaXmark, FaCoins, FaChartPie, FaUser } from 'react-icons/fa6';
import { useState } from 'react';
import BottomNavigationModal from './BottomNavigationModal';

const getOpenModalBtnAnimation = (modalAction?: 'open' | 'close') => {
  if (modalAction === 'open') return 'animate-rotate-90-reverse';
  if (modalAction === 'close') return 'animate-rotate-90';
  return '';
};

export default function BottomNavigation() {
  const router = useRouter();
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // used to animate the modal button
  const [modalAction, setModalAction] = useState<'open' | 'close'>();

  const setButtonsColor = (buttonPathName: string) => (
    pathName === buttonPathName ? 'text-primary-100' : 'text-light-20'
  );
  return (
    <nav className='fixed bottom-0 w-screen max-w-md h-20 bg-light-80 flex justify-around items-center'>
      <button
        className={`${setButtonsColor('/')} flex flex-col justify-center items-center gap-1`}
        onClick={() => router.push('/')}
      >
        <FaHouse size={24} />
        <h1 className='regular-xs'>Home</h1>
      </button>
      <button
        className={`${setButtonsColor('/transactions')} text-light-20 flex flex-col justify-center items-center gap-1`}
        onClick={() => router.push('/transactions')}
      >
        <FaCoins size={24} />
        <h1 className='regular-xs'>Transações</h1>
      </button>
      <button
        onClick={() => {
          setModalAction(isModalOpen ? 'open' : 'close')
          setIsModalOpen(state => !state)
        }}
        className={`
          ${getOpenModalBtnAnimation(modalAction)}
          flex justify-center mb-5 items-center
          text-light-100 bg-primary-100 w-12 h-12 rounded-full
        `}
      >
        { isModalOpen ? <FaXmark size={24} /> : <FaPlus size={24} /> }
      </button>
      <button
        className={`
          ${setButtonsColor('/budget')} text-light-20
          flex flex-col justify-center items-center gap-1
        `}
        onClick={() => router.push('/budget')}
      >
        <FaChartPie size={24} />
        <h1 className='regular-xs'>Orçamento</h1>
      </button>
      <button
        className={`${setButtonsColor('/profile')} text-light-20 flex flex-col justify-center items-center gap-1`}
        onClick={() => router.push('/profile')}
      >
        <FaUser size={24} />
        <h1 className='regular-xs'>Perfil</h1>
      </button>
      { isModalOpen && <BottomNavigationModal />}

    </nav>
  )
}