import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'FrogHack - Blockchain Hacking Game',
  description:
    'Blockchain hacking game where you build elite teams of hacker frogs to dominate the metaverse.',
};

const pixelFont = localFont({
  src: './font/pixel.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={pixelFont.className}>
      <body
        style={{
          cursor: "url('/cursors/default.png') 0 0, auto",
        }}
      >
        {children}
      </body>
    </html>
  );
}
