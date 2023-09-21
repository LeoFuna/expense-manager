import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const ONE_DAY = 24 * 60 * 60;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: ONE_DAY,
  },
  session: {
    maxAge: ONE_DAY,
  },
  pages: {
    signIn: '/signin',
  },
  // callbacks: {
  //   async signIn({ user }) {
  //     // if (user.email) {
  //     //   try {
  //     //     await userService.getUnique(user.email);
  //     //     return true;
  //     //   } catch (error: any) {
  //     //     if (error.statusCode === 404) {
  //     //       return userService
  //     //         .create({ email: user.email, currentDate: new Date() })
  //     //         .then(() => true)
  //     //         .catch(() => {
  //     //           console.log('Erro interno, tente novamente...');
  //     //           return '/signin';
  //     //         });
  //     //     } else {
  //     //       console.error(error);
  //     //       return '/signin';
  //     //     }
  //     //   }
  //     // }
  //     return '/signin';
  //   },
  // },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };