import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Image from 'next/image';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Pokémon TCG',
  description: 'Discover the world of Pokémon Trading Card Game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div className='logo'>Pokémon TCG</div>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/set'>Series</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className='banner'>
          <Image
            src='/banner.jpg'
            alt='Pokémon TCG Banner'
            layout='responsive'
            width={1920}
            height={600}
          />
        </section>
        <main>{children}</main>
        <footer>
          <div className='footer-links'>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Privacy Policy</a>
          </div>
          <div className='footer-contact'>
            <p>Email: mailto:contact@pokemontcg.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className='footer-social'>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
