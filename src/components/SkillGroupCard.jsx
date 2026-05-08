import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function SkillGroupCard({ group, delay = 0 }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
      }}
    >
      <Card className="h-full border-white/10 bg-white/[0.04]">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan/90">{group.title}</p>
        <div className="mt-5 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
          {group.items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-5 text-center transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-xl text-cyan">
                  <Icon />
                </span>
                <span className="text-sm font-medium text-slate-100">{item.name}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </motion.article>
  );
}
