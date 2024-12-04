import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistMono.className} ${GeistSans.className}`} suppressHydrationWarning>
      <body>
        <RootProvider search={{enabled: false }} >{children}</RootProvider>
      </body>
    </html>
  );
}
