import { motion, useReducedMotion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { socialLinks } from '../data/socialLinks';
import { sectionVariants, itemVariants } from '../utils/motion';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-100" />

      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-purple/10 blur-3xl" />

      <div className="container-width relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={itemVariants} className="section-eyebrow">
              Backend & Full Stack Developer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              I build scalable backend systems and modern web applications.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              I’m Kanumilli Poojitha, a developer focused on backend
              engineering, distributed systems, API architecture,
              and production-inspired full stack applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                as={Link}
                to="projects"
                smooth
                duration={500}
                offset={-96}
              >
                Explore Projects <FaArrowRight />
              </Button>

              <Button
                as={Link}
                to="contact"
                smooth
                duration={500}
                offset={-96}
                variant="secondary"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-transform hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <Parallax
            speed={prefersReducedMotion ? 0 : 10}
            className="relative lg:justify-self-end"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Card className="relative overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan/10" />

                <div className="relative flex min-h-[24rem] flex-col justify-between p-8">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Open to internships & opportunities</span>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                      Open to work
                    </span>
                  </div>

                  <div className="mx-auto flex w-full max-w-sm flex-1 items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 -z-10 rounded-full bg-cyan/20 blur-3xl" />

                      <div className="flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-white/5 text-center shadow-glow backdrop-blur-sm sm:h-60 sm:w-60">
                        <div>
                          <p className="font-display text-4xl font-bold">
                            KP
                          </p>

                          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                            Kanumilli Poojitha
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-white">Backend Systems</p>

                      <p className="mt-1">
                        APIs, authentication, async workflows
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-white">Full Stack</p>

                      <p className="mt-1">
                        React, FastAPI, PostgreSQL, Docker
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}