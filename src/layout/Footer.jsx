import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container-width flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">© 2026 Kanumilli Poojitha. Built with React, Tailwind, and motion.</p>

        <div className="flex items-center gap-3">
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

          <Link
            to="home"
            smooth
            duration={500}
            className="inline-flex h-11 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 px-4 text-sm font-semibold text-cyan transition-transform hover:-translate-y-0.5"
          >
            Back to top
          </Link>
        </div>
      </div>

      <motion.div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} />
    </footer>
  );
}
