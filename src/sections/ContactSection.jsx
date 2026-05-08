import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { contactLinks } from '../data/contact';
import { sectionVariants, itemVariants } from '../utils/motion';

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let’s connect"
      description="Open to backend, full stack, and software engineering opportunities."
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]"
      >
        <motion.div
          variants={itemVariants}
          className="card-shell border-white/10 bg-white/[0.04]"
        >
          <p className="text-base leading-8 text-slate-300">
            I’m interested in building scalable backend systems,
            production-ready APIs, and full stack applications.
            Feel free to reach out for collaborations, internships,
            or software engineering opportunities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={contactLinks.email}>
              <FaEnvelope /> Email Me
            </Button>

            <Button
              as="a"
              href={contactLinks.github}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-4">
          <Card className="border-white/10 bg-white/[0.04]">
            <div className="flex items-center gap-3 text-white">
              <FaGithub className="text-cyan" />

              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-cyan"
              >
                GitHub Profile
              </a>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/[0.04]">
            <div className="flex items-center gap-3 text-white">
              <FaLinkedinIn className="text-purple-400" />

              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-purple-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/[0.04]">
            <div className="flex items-center gap-3 text-white">
              <FaEnvelope className="text-emerald-400" />

              <a
                href={contactLinks.email}
                className="font-medium hover:text-emerald-300"
              >
                poojithakanumilli@gmail.com
              </a>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}