'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ScrollToSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        router.replace('/', { scroll: false });
      }, 100);
    }
  }, [searchParams]);

  return null; // renders nothing
}