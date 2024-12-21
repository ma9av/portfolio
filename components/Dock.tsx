import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconTerminal2,
} from '@tabler/icons-react';

export function Dock() {
  const links = [
    {
      title: 'Home',
      icon: <IconHome className='h-full w-full text-neutral-300' />,
      href: '#',
    },

    {
      title: 'Projects',
      icon: <IconTerminal2 className='h-full w-full text-neutral-300' />,
      href: '#projects',
    },

    {
      title: 'GitHub',
      icon: <IconBrandGithub className='h-full w-full text-neutral-300' />,
      href: 'https://github.com/ma9av',
    },
    {
      title: 'Linkedin',
      icon: <IconBrandLinkedin className='h-full w-full text-neutral-300' />,
      href: 'https://www.linkedin.com/in/mpweb/',
    },
  ];
  return (
    <div className='flex items-center justify-center w-full fixed left-0 bottom-3'>
      <div className='absolute -bottom-10 w-full h-20 bg-black blur-[60px] z-[-1]'></div>
      <FloatingDock items={links} />
    </div>
  );
}
