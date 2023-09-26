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

      <div className='flex flex-col w-screen px-4 gap-2'>
        <section className="flex justify-between items-center">
          <h1 className='title-3 text-dark-75'>Transações Recentes</h1>
          <button className='bg-primary-20 text-primary-100 px-4 py-2 rounded-xl'>Ver Todas</button>
        </section>
        <section className='flex flex-col items-between gap-7 py-4'>
          <div className='flex justify-between'>
            <div className="bg-primary-20 flex items-center justify-center w-12 h-12 rounded-xl text-primary-100">
              <FiTrendingDown size={24} />
             </div>
            <div className='flex flex-col justify-between w-2/4'>
              <h1 className='regular-l'>Shopping</h1>
              <h3 className='regular-xs text-light-20'>Comprar uma roupa</h3>
            </div>
            <div className='flex flex-col justify-between items-end'>
              <h1 className='title-3 text-danger-100'>-R$ 30,00</h1>
              <h3 className='regular-xs text-light-20'>10:00 AM</h3>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className="bg-primary-20 flex items-center justify-center w-12 h-12 rounded-xl text-primary-100">
              <FiTrendingDown size={24} />
             </div>
            <div className='flex flex-col justify-between w-2/4'>
              <h1 className='regular-l'>Freelancer</h1>
              <h3 className='regular-xs text-light-20'>Website</h3>
            </div>
            <div className='flex flex-col justify-between items-end'>
              <h1 className='title-3 text-success-100'>R$ 50,00</h1>
              <h3 className='regular-xs text-light-20'>12:00 AM</h3>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className="bg-primary-20 flex items-center justify-center w-12 h-12 rounded-xl text-primary-100">
              <FiTrendingDown size={24} />
             </div>
            <div className='flex flex-col justify-between w-2/4'>
              <h1 className='regular-l'>Padaria</h1>
              <h3 className='regular-xs text-light-20'>Pao de batata</h3>
            </div>
            <div className='flex flex-col justify-between items-end'>
              <h1 className='title-3 text-danger-100'>-R$ 10,00</h1>
              <h3 className='regular-xs text-light-20'>15:00 AM</h3>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className="bg-primary-20 flex items-center justify-center w-12 h-12 rounded-xl text-primary-100">
              <FiTrendingDown size={24} />
             </div>
            <div className='flex flex-col justify-between w-2/4'>
              <h1 className='regular-l'>Padaria</h1>
              <h3 className='regular-xs text-light-20'>Pao de batata</h3>
            </div>
            <div className='flex flex-col justify-between items-end'>
              <h1 className='title-3 text-danger-100'>-R$ 10,00</h1>
              <h3 className='regular-xs text-light-20'>15:00 AM</h3>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className="bg-primary-20 flex items-center justify-center w-12 h-12 rounded-xl text-primary-100">
              <FiTrendingDown size={24} />
             </div>
            <div className='flex flex-col justify-between w-2/4'>
              <h1 className='regular-l'>Padaria</h1>
              <h3 className='regular-xs text-light-20'>Pao de batata</h3>
            </div>
            <div className='flex flex-col justify-between items-end'>
              <h1 className='title-3 text-danger-100'>-R$ 10,00</h1>
              <h3 className='regular-xs text-light-20'>15:00 AM</h3>
            </div>
          </div>
        </section>
      </div>

    </section>
  )
}