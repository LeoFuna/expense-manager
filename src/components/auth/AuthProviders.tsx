'use client'
import { getProviders } from 'next-auth/react';
import { LoginButton } from './LoginButton';
import { useEffect, useState } from 'react';

export default function AuthProviders() {
  const [oAuthProviders, setOAuthProviders] = useState<any[]>([]);
  useEffect(() => {
    getProviders().then((providers) => {
      setOAuthProviders(Object.values(providers ?? []));

    });
  }, [])

  return oAuthProviders.map((provider) => (
    <LoginButton key={provider.id} provider={provider} />
  ));
}