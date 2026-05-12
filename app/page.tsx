import { Hero } from '@/components/sections/Hero';
import { ValuePillars } from '@/components/sections/ValuePillars';
import { ProcessTeaser } from '@/components/sections/ProcessTeaser';
import { CirclesTeaser } from '@/components/sections/CirclesTeaser';
import { ClosingCTA } from '@/components/sections/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <ProcessTeaser />
      <CirclesTeaser />
      <ClosingCTA />
    </>
  );
}