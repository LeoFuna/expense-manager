import { IAccount } from '@/interfaces/Account';
import AccountRepoFirebase from '@/repositories/AccountRepoFirebase';
import AccountService from '@/services/AccountService';
import NextAuth from 'next-auth';
import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const ONE_DAY = 24 * 60 * 60;

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  jwt: {
    maxAge: ONE_DAY,
  },
  session: {
    maxAge: ONE_DAY,
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    signIn: async ({ user }) => {
      if (user?.email) {
        const accountService = new AccountService(new AccountRepoFirebase());
        const isNewUser = await accountService.checkIfIsANewUser(user.email);

        if (isNewUser) {
          const newUserAccountData: IAccount = {
            email: user.email,
            balanceInCents: 0,
            monthInNumber: new Date().getMonth(),
          };
          await accountService.create(newUserAccountData);
        }
        return true;
      }
      return '/signin';
    }
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };