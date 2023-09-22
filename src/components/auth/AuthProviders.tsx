'use client';
import { getProviders } from 'next-auth/react';
import { LoginButton } from './LoginButton';
import { useEffect, useState } from 'react';
import { Spinner } from '../core/Spinner';



export default function AuthProviders() {
  const [oAuthProviders, setOAuthProviders] = useState<any[]>([]);

  useEffect(() => {
    getProviders()
    .then((providers) => Object.values(providers ?? []))
    .then((oAuthProv) => setOAuthProviders(oAuthProv));
  }, [])

  if (!oAuthProviders.length) return <Spinner />;
  return oAuthProviders.map((provider: any) => (
    <LoginButton key={provider.id} provider={provider} />
  ));
}