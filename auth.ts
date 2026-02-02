import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          // Si pones el correo y pass del tutorial, te deja entrar SIEMPRE
          if (email === 'user@nextmail.com' && password === '123456') {
            return {
              id: '410a44b2-62dd-4321-9157-3e0ca317db6a',
              name: 'User',
              email: 'user@nextmail.com',
            };
          }
        }
        return null;
      },
    }),
  ],
});