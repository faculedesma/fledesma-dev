import { ReactElement, useEffect, useRef } from 'react';

import { useIsOnTop } from '@components/hooks/useIsOnTop';

import { LinkedIn } from '@assets/svgs/LinkedIn';
import { Mail, Github } from 'lucide-react';
import { X } from '@assets/svgs/X';
import './social.scss';

interface ILink {
  id: string;
  href: string;
  aria: string;
  icon: ReactElement;
}

interface ILinkProps {
  link: ILink;
}

const links = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/facundo-ledesma/',
    aria: `Go to Facundo's LinkedIn account.`,
    icon: <LinkedIn />
  },
  {
    id: 'github',
    href: 'https://github.com/faculedesma',
    aria: `Go to Facundo's GitHub account.`,
    icon: <Github />
  },
  {
    id: 'x',
    href: 'https://x.com/faculedesma93',
    aria: `Go to Facundo's X account.`,
    icon: <X />
  },
  {
    id: 'envelop',
    href: 'mailto:faculedesma1993@gmail.com',
    aria: `Send Facundo an email.`,
    icon: <Mail />
  }
];

const SocialLink = ({ link }: ILinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isOnTop = useIsOnTop(linkRef);

  useEffect(() => {
    if (linkRef.current) {
      const mouse = document.getElementById('mouse-follow');
      if (isOnTop) {
        mouse?.classList.remove('point');
        mouse?.classList.add('hide');
      } else {
        mouse?.classList.add('point');
        mouse?.classList.remove('hide');
      }
    }
  }, [isOnTop]);

  return (
    <a
      ref={linkRef}
      href={link.href}
      target="_blank"
      aria-label={link.aria}
    >
      {link.icon}
    </a>
  );
};

export const Social = () => {
  return (
    <div className="social">
      {links.map((link) => {
        return <SocialLink key={link.id} link={link} />;
      })}
    </div>
  );
};
