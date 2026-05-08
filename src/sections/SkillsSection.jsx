import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SkillGroupCard from '../components/SkillGroupCard';
import { skillGroups } from '../data/skills';
import { sectionVariants } from '../utils/motion';

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Technologies and tools I work with"
      description="A combination of backend, frontend, database, and DevOps technologies used to build scalable and production-ready applications."
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {skillGroups.map((group, index) => (
          <SkillGroupCard
            key={group.title}
            group={group}
            delay={index * 0.08}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}