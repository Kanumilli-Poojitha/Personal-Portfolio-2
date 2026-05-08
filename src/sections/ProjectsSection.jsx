import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { sectionVariants } from '../utils/motion';

export default function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Production-inspired backend and full stack projects"
      description="Projects focused on scalable APIs, distributed systems, async processing, system reliability, and modern full stack application architecture."
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={index * 0.08}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}