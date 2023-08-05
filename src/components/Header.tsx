"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/images/logo-img.png";
import logoText from "/public/images/logo-text.png";
import { usePathname } from "next/navigation";

const navList = [
  {
    href: "/",
    text: "홈",
  },
  {
    href: "/schedule",
    text: "시간표",
  },
  {
    href: "/registration",
    text: "입학원서",
  },
  {
    href: "/list",
    text: "학원생",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logoImg} alt="logo image" width={100} height={100} />
        <Image src={logoText} alt="logo text image" width={327} height={80} />
      </Link>

      <nav>
        <ul className="flex gap-4 items-center text-xl">
          {navList.map((item) => (
            <li
              key={item.href}
              className={
                "hover:text-primary-color" +
                (pathname === item.href ? " text-primary-color font-bold" : "")
              }
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
