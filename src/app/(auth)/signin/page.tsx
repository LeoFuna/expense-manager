import AuthProviders from '@/components/auth/AuthProviders';
import Image from 'next/image';

export default async function SignIn() {
  return (
    <main className="flex items-center flex-col py-11 md:px-[432px] px-4 h-[100dvh]">
      <div className="relative w-11/12 max-w-md h-2/5">
        <Image src='/login-hero.svg' fill alt='Login Hero Image' />
      </div>
      <div className='flex flex-col py-14 gap-4 max-w-md'>
        <h1 className='title-1 text-title-m text-center'>Se planeje</h1>
        <p className='regular-m font-medium text-light-20 text-center'>Tenha controle sobre seus gastos</p>
      </div>
      <div className="w-full flex flex-col justify-center max-w-md">
        <AuthProviders />
      </div>
    </main>
  );
}