import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import Card from '../ui/Card';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      <Card className="group h-full overflow-hidden border-white/10 bg-white/[0.04] p-0">
        <div className="relative flex h-48 items-end overflow-hidden border-b border-white/8 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan/10 p-6">
          <div className="absolute inset-0 bg-radial-glow opacity-60 transition-transform duration-500 group-hover:scale-105" />
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-3xl font-bold text-white backdrop-blur-sm">
            {project.title.slice(0, 1)}
          </div>
        </div>

        <div className="flex h-full flex-col gap-5 p-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <a className="btn-secondary px-4 py-2 text-xs" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
              <FaGithub /> GitHub
            </a>
            <a className="btn-primary px-4 py-2 text-xs" href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
              <FaArrowUpRightFromSquare /> Live Demo
            </a>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
