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
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };