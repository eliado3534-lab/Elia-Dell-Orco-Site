import Biography from '@/components/home/Biography';
import Education from '@/components/home/Education';
import Hero from '@/components/home/Hero';
import WorksIndex from '@/components/home/WorksIndex';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorksIndex />
      <Biography />
      <Education />
    </>
  );
}
