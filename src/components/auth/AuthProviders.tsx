import { getProviders } from 'next-auth/react';
import { LoginButton } from './LoginButton';

export default async function AuthProviders() {
  const providers = await getProviders();
  const oAuthProviders = Object.values(providers ?? []);
  console.log(providers)
  console.log(oAuthProviders)
  return oAuthProviders.map((provider) => (
    <LoginButton key={provider.id} provider={provider} />
  ));
}