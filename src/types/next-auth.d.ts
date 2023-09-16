import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      phone: string;
      role: string;
      accessToken: string;
    };
  }
}
