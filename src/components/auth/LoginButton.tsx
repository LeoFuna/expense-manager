'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '../core/Button';

export function LoginButton({ provider }: { provider: ClientSafeProvider }) {
  return (
    <Button
      onClick={() => signIn(provider.id, { callbackUrl: '/' })}
    >
      <Image
        className="mr-3"
        src={`/${provider.id}.svg`}
        width={30}
        height={30}
        alt={`${provider.id} image`}
      />
      Entrar
    </Button>
  );
}
