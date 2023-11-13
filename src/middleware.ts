export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/students/:path*', '/registration', '/schedule', '/teachers/:path*'],
};
