import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Contact />
    </>
  );
}
