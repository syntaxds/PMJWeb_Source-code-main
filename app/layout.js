import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import PMJNav from '@/components/pmj/PMJNav';
import PMJFooter from '@/components/pmj/PMJFooter';
import { LanguageProvider } from '@/components/pmj/LanguageProvider';
import GlobalLoadingProvider from '@/components/pmj/GlobalLoadingProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: 'PT Padas Mustapa Jaya',
  description:
    'Integrated industrial services since 2018. Logistics, heavy equipment rental, and woodchip / biomass solutions trusted by Indonesia\'s leading mills, utilities, and manufacturers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <GlobalLoadingProvider>
            <div className="pmj-root">
              <PMJNav />
              <main>{children}</main>
              <PMJFooter />
            </div>
          </GlobalLoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
