import { getProviders } from 'next-auth/react';
import { LoginButton } from './LoginButton';

export default async function AuthProviders() {
  const providers = await getProviders();
  const oAuthProviders = Object.values(providers ?? []);
  console.log(oAuthProviders)
  return <h1>Teste</h1>
}