'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        className="rounded-xl border bg-red-300 px-4"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    );
  }

  return (
    <button
      className="rounded-xl  bg-primary-color px-4"
      onClick={() => signIn()}
    >
      로그인
    </button>
  );
}
