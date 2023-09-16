'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SignInButton from './SignInButton';
import { useSession } from 'next-auth/react';

const navList = [
  {
    href: '/',
    text: '홈',
  },
  {
    href: '/schedule',
    text: '시간표',
  },
  {
    href: '/registration',
    text: '입학원서',
  },
  {
    href: '/students',
    text: '학원생',
  },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (pathname === '/login') {
    return;
  }

  return (
    <header className="flex justify-between items-center px-10 py-5">
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <div className="w-[100px] h-[100px] relative">
          <Image
            src={`/images/logo-img.png`}
            alt="logo image"
            fill
            sizes="100vh"
            priority
          />
        </div>
        <div className="w-[327px] h-[80px] relative">
          <Image
            src={`/images/logo-text.png`}
            alt="logo text image"
            fill
            sizes="100vh"
            priority
          />
        </div>
      </Link>
      {session && session.user ? (
        <nav>
          <ul className="flex gap-4 items-center text-xl min-w-max">
            {navList.map((item) => (
              <li
                key={item.href}
                className={
                  'hover:text-primary-color' +
                  (pathname === item.href ? ' text-primary-color font-bold' : '') +
                  (item.href === '/list' && pathname.includes(`/list/`) ? ' text-primary-color font-bold' : '')
                }
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
            <SignInButton />
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className="flex gap-4 items-center text-xl min-w-max">
            <li
              className={
                'hover:text-primary-color' + (pathname === navList[0].href ? ' text-primary-color font-bold' : '')
              }
            >
              <Link href={navList[0].href}>{navList[0].text}</Link>
            </li>

            <SignInButton />
          </ul>
        </nav>
      )}
    </header>
  );
}
