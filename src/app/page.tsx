import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Programs } from '@/components/sections/Programs';
import { Flow } from '@/components/sections/Flow';
import { Trust } from '@/components/sections/Trust';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { CompanyInfo } from '@/components/sections/CompanyInfo';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Programs />
      <Flow />
      <Trust />
      <FAQ />
      <Contact />
      <CompanyInfo />
    </>
  );
}
