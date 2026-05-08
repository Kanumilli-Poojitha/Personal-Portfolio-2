import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { navigationLinks } from '../data/navigation';
import useActiveSection from '../hooks/useActiveSection';
import useScrollDirection from '../hooks/useScrollDirection';
import { cn } from '../utils/cn';

const sectionIds = navigationLinks.map((link) => link.href);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const scrollDirection = useScrollDirection();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navbarMotion = prefersReducedMotion ? {} : { y: scrollDirection === 'down' && !isOpen ? -24 : 0 };

  return (
    <motion.header
      initial={false}
      animate={navbarMotion}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-white/8 bg-slate-950/70 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="container-width flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
          Kanumilli Poojitha
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth
              offset={-96}
              duration={500}
              className={cn(
                'cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white',
                activeSection === link.href ? 'bg-white/8 text-white' : 'bg-transparent',
              )}
              aria-current={activeSection === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="btn-secondary md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="container-width pb-6 md:hidden"
          >
            <div className="glass-panel rounded-3xl p-3">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    smooth
                    offset={-96}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                      activeSection === link.href ? 'bg-white/8 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
                    )}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
