import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>헤더</h1>
      </Link>
    </header>
  );
}
