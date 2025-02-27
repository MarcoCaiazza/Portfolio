'use client'

import { useEffect, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayouts from '../layouts/MainLayouts';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
  <MainLayouts>
    <Component {...pageProps} />
  </MainLayouts>
  );
}
