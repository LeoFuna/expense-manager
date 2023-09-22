'use client'
import { getProviders } from 'next-auth/react';
import { LoginButton } from './LoginButton';
import wrapPromise from '@/utils/wrapPromise';

const wrapedProviders = wrapPromise(getProviders().then((providers) => Object.values(providers ?? [])));

export default function AuthProviders() {
  const oAuthProviders = wrapedProviders.read();

  return oAuthProviders.map((provider: any) => (
    <LoginButton key={provider.id} provider={provider} />
  ));
}