import { LogoSVG } from '@assets/svgs/LogoSVG';
import { useRef } from 'react';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import { useMouseFollow } from '@components/hooks/useMouseFollow';

import './logo.scss';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    const top = document.getElementById('hero');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useMouseFollow(logoRef, 'fire', false);

  return (
    <div ref={logoRef} onClick={handleLogoClick} className="logo">
      <LogoSVG />
    </div>
  );
};

export default Logo;
