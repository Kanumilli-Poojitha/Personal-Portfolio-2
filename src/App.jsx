import SiteLayout from './layout/SiteLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </SiteLayout>
  );
}
