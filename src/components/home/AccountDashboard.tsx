import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

export default function AccountDashboard() {
  return (
    <section className="px-4 py-4 flex flex-col items-center gap-7 w-screen">
      <div className="flex flex-col items-center gap-2">
        <h2 className="regular-s text-light-20">Saldo da Conta</h2>
        <h3 className="title-1 text-dark-75">R$ 1.000,00</h3>
      </div>

      <div className="flex justify-center w-full gap-4">
        <div className="flex items-center bg-success-100 w-2/4 p-4 rounded-3xl gap-2">
          <div className="bg-light-100 flex items-center w-12 h-12 p-2 rounded-xl text-success-100">
            <FiTrendingUp size={24} />
          </div>
          <div className='text-light-100 flex flex-col items-start gap-2 w-3/4'>
            <h4 className='regular-s'>Entradas</h4>
            <p className='title-2 text-base'>R$ 10.000</p>
          </div>
        </div>

        <div className="flex bg-danger-100 w-2/4 p-4 rounded-3xl gap-2">
          <div className="bg-light-100 flex items-center w-12 h-12 p-2 rounded-xl text-danger-100">
            <FiTrendingDown size={24} />
          </div>
          <div className='text-light-100 flex flex-col items-start gap-2 w-3/4'>
            <h4 className='regular-s'>Saídas</h4>
            <p className='title-2 text-base'>R$ 10.000</p>
          </div>
        </div>
      </div>

    </section>
  )
}