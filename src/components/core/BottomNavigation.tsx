'use client';
import { useRouter } from 'next/navigation';
import { FaHouse, FaPlus } from 'react-icons/fa6';
export default function BottomNavigation() {
  const router = useRouter();
  return (
    <nav className='fixed bottom-0 w-screen h-20 bg-light-80 flex justify-around items-center'>
      <button
        className='text-primary-100 flex flex-col justify-center items-center gap-1'
        onClick={() => router.push('/')}
      >
        <FaHouse size={24} />
        <h1 className='regular-xs'>Home</h1>
      </button>
      <button
        className='text-light-20 flex flex-col justify-center items-center gap-1'
        onClick={() => router.push('/transactions')}
      >
        <FaHouse size={24} />
        <h1 className='regular-xs'>Transações</h1>
      </button>
      <button className='flex justify-center mb-5 items-center text-light-100 bg-primary-100 w-10 h-10 rounded-full'>
        <FaPlus size={24} />
      </button>
      <button className='text-light-20 flex flex-col justify-center items-center gap-1'>
        <FaHouse size={24} />
        <h1 className='regular-xs'>Orçamento</h1>
      </button>
      <button className='text-light-20 flex flex-col justify-center items-center gap-1'>
        <FaHouse size={24} />
        <h1 className='regular-xs'>Perfil</h1>
      </button>
    </nav>
  )
}