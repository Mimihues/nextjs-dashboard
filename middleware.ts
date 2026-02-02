import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // Asegúrate de que esta línea sea IDÉNTICA
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};