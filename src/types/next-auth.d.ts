import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      exp: number;
      iat: number;
      jti: string;
      message: string;
      result: {
        id: number;
        name: string;
        email: string;
        phone: string;
        role: string;
        accessToken: string;
      };
      status: number;
      success: boolean;
    };
  }
}
