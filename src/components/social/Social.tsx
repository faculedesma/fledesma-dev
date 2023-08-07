import { useEffect } from 'react';
import { Twitter } from '@assets/svgs/Twitter';
import { Behance } from '@assets/svgs/Behance';
import { Dribble } from '@assets/svgs/Dribble';
import { LinkedIn } from '@assets/svgs/LinkedIn';
import { GitHub } from '@assets/svgs/GitHub';
import { ReactElement, useRef } from 'react';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import './social.scss';
import { MailEnvelop } from '@assets/svgs/MailEnvelop';

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
    icon: <GitHub />
  },
  // {
  //   id: 'behance',
  //   href: 'https://www.behance.net/facundoledesma5',
  //   aria: `Go to Facundo's Behance account.`,
  //   icon: <Behance />
  // },
  // {
  //   id: 'dribble',
  //   href: 'https://www.linkedin.com/in/facundo-ledesma/',
  //   aria: `Go to Facundo's Dribble account.`,
  //   icon: <Dribble />
  // },
  {
    id: 'twitter',
    href: 'https://twitter.com/faculedesma93',
    aria: `Go to Facundo's Twitter account.`,
    icon: <Twitter />
  },
  {
    id: 'envelop',
    href: 'mailto:faculedesma1993@gmail.com',
    aria: `Send Facundo an email.`,
    icon: <MailEnvelop />
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
