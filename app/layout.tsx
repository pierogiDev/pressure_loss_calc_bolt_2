import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import SiteDrawer from './components/Layout/SiteDrawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '配管圧力損失計算',
  description: '配管システムの圧力損失を計算するためのツール',
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Providers>
          <SiteDrawer />
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}