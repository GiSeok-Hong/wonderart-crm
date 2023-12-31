import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `원더아트 스튜디오`,
    template: `원더아트 스튜디오 | %s`,
  },
  description: '원더아트 스튜디오 원생관리 웹사이트입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="application-name"
          content="원더아트"
        />
        <meta
          name="description"
          content="원더아트 스튜디오 웹사이트 입니다."
        />
        {/* apple 설정 메타 태그 */}
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="원더아트"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/touch-icon-iphone.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="msapplication-config"
          content="/icons/browserconfig.xml"
        />
        <meta
          name="msapplication-TileColor"
          content="#2B5797"
        />
        <meta
          name="msapplication-tap-highlight"
          content="no"
        />
        <meta
          name="theme-color"
          content="#000000"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="px-10 py-5">{children}</main>
        </Providers>
        <div id="modal-root"></div>
        <Toaster />
      </body>
    </html>
  );
}
