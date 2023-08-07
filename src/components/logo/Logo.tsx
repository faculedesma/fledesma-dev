import { LogoSVG } from '@assets/svgs/LogoSVG';
import { useEffect, useRef } from 'react';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import './logo.scss';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const isOnTop = useIsOnTop(logoRef);

  useEffect(() => {
    if (logoRef.current) {
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
    <div ref={logoRef} className="logo">
      <LogoSVG />
    </div>
  );
};

export default Logo;
