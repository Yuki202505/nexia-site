import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Programs } from '@/components/sections/Programs';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <FAQ />
      <Contact />
    </>
  );
}
