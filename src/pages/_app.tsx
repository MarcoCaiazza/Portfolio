'use client'

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayouts from '../layouts/MainLayouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayouts>
      <div suppressHydrationWarning>
        <Component {...pageProps} />
      </div>
    </MainLayouts>
  );
}
