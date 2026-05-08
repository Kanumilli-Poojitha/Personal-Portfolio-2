import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa6';

import {
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiMysql,
} from 'react-icons/si';

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },

  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: SiFastapi },
    ],
  },

  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
    ],
  },

  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Docker', icon: FaDocker },
    ],
  },
];