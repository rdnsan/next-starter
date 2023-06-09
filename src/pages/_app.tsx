/* eslint-disable no-console */
import '@/styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.table(metric);
  } else {
    console.log(metric);
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
