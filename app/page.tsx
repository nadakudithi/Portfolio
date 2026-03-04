import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Explorations } from './components/Explorations';
import { Hero } from './components/Hero';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <CaseStudies />
      <Explorations />
      <About />
      <Contact />
    </main>
  );
}
