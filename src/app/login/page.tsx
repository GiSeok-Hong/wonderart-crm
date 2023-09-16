'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

type InputLogin = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<InputLogin>({
    mode: 'onSubmit',
  });

  const submitHandler = async (data: InputLogin) => {
    try {
      const res = await signIn('credentials', {
        username: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        return alert(res.error);
      } else {
        return router.push('/');
      }
    } catch (error) {
      console.log('로그인 에러 ::: ' + error);
      return alert('알 수 없는 에러로 로그인에 실패했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="h-full flex justify-center items-center">
        <article className="flex gap-14 flex-col items-center w-96 h-176 border-2 shadow-lg">
          <Link href="/">
            <Image
              width={242}
              height={55}
              src="/images/logo.png"
              alt="로고"
              className="mt-14"
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
                type="email"
                required
                autoFocus={true}
                maxLength={30}
                {...register('email', { maxLength: 30 })}
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
                type="password"
                required
                maxLength={20}
                {...register('password', { maxLength: 20 })}
              />
            </div>

            <button className="bg-[#91E9F2] w-full text-white py-3 px-10 mb-6">로그인</button>
            <p>Forgot your password?</p>
          </div>
        </article>
      </div>
    </form>
  );
}
