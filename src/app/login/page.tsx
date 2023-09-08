'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = async () => {
    await signIn('credentials', {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div className="h-full flex justify-center items-center">
      <article className="flex gap-20 flex-col items-center w-96 h-176 border-2 shadow-lg">
        <Link href="/">
          <Image
            width={242}
            height={55}
            src="/images/logo-text-img.png"
            alt="로고"
            className="mt-32"
          />
        </Link>
        <div className="w-80 h-[343] flex-col">
          <div className="mb-5">
            <label
              className="font-normal"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              className="w-full h-8 pl-2 shadow-inner"
              style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25) inset' }}
              id="email"
              name="email"
              type="email"
              required
              autoFocus={true}
              ref={emailRef}
              onChange={(e: any) => {
                emailRef.current = e.target.value;
              }}
            />
          </div>
          <div className="mb-5">
            <label
              className="font-normal"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="w-full h-8 pl-2 shadow-inner"
              style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25) inset' }}
              id="password"
              name="password"
              type="password"
              required
              ref={passwordRef}
              onChange={(e: any) => (passwordRef.current = e.target.value)}
            />
          </div>

          <button
            className="bg-[#91E9F2] w-full text-white py-3 px-10 mb-6"
            onClick={submitHandler}
          >
            로그인
          </button>
          <p>Forgot your password?</p>
        </div>
      </article>
    </div>
  );
}
