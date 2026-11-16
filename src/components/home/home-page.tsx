import { About } from './about';
import { BuildingCard } from './building-card';
import { Experience } from './experience';
import { Hero } from './hero';
import { Impact } from './impact';
import { OpenSource } from './open-source';
import { Projects } from './projects';
import { Stack } from './stack';
import { WorkedWith } from './worked-with';

export function HomePage() {
  return (
    <main>
      <Hero />
      <WorkedWith />
      <About />
      <Impact />
      <Stack />
      <Experience />
      <Projects />
      <OpenSource />
      <BuildingCard />
    </main>
  );
}
