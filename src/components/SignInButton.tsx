'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        className="rounded-xl bg-yellow-100 border-yellow-100 border px-4 hover:text-yellow-300 hover:bg-white "
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    );
  }

  return (
    <button
      className="rounded-xl  bg-primary-color border-primary-color border px-4 hover:text-primary-color hover:bg-white "
      onClick={() => signIn()}
    >
      로그인
    </button>
  );
}
