import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Card from '../ui/Card';
import SectionWrapper from '../components/SectionWrapper';
import { sectionVariants, itemVariants } from '../utils/motion';

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      label="About"
      title="Backend & Full Stack Developer focused on scalable systems"
      description="I enjoy building production-inspired applications with secure APIs, distributed systems concepts, and scalable backend architectures."
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <Parallax speed={2} className="relative">
          <motion.div variants={itemVariants}>
            <Card className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-gradient-to-br from-white/8 via-white/5 to-cyan/10 p-0">
              <div className="absolute inset-0 bg-radial-glow opacity-70" />

              <div className="relative flex h-48 w-48 items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/55 text-center backdrop-blur-sm">
                <div>
                  <p className="font-display text-5xl font-bold">KP</p>

                  <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-400">
                    Backend & Full Stack
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </Parallax>

        <motion.div variants={sectionVariants} className="grid gap-6">
          <motion.div
            variants={itemVariants}
            className="card-shell border-white/10 bg-white/[0.04]"
          >
            <p className="text-base leading-8 text-slate-300">
              I focus on building scalable backend systems, secure APIs,
              and production-style applications using modern technologies.
              My interests include distributed systems, payment architectures,
              API gateways, and multi-tenant SaaS platforms.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="card-shell border-white/10 bg-white/[0.04]"
            >
              <h3 className="font-display text-xl font-bold text-white">
                What I enjoy
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Designing backend architectures, building resilient APIs,
                working with databases, and solving real-world system design problems.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-shell border-white/10 bg-white/[0.04]"
            >
              <h3 className="font-display text-xl font-bold text-white">
                What I’m learning
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Advanced distributed systems, cloud-native architectures,
                asynchronous processing, and performance optimization.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="card-shell border-white/10 bg-white/[0.04]"
          >
            <h3 className="font-display text-xl font-bold text-white">
              Background
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              I enjoy turning complex ideas into reliable and maintainable
              applications. My projects focus on backend engineering,
              system reliability, scalability, and production-inspired architectures
              using technologies like FastAPI, Redis, PostgreSQL, Docker, and React.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}