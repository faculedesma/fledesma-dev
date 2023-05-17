import { MailEnvelop } from '@assets/svgs/MailEnvelop';
import { useState, useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { Social } from '@components/social/Social';
import MatirxPNG from '@assets/images/matrix.png';
import { useCursorPosition } from '@components/hooks/useCursorPosition';
import './footer.scss';

const Footer = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const footerRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLImageElement>(null);
  const isInViewport = useIntersection(
    footerRef,
    isMobile ? 0 : -300
  );
  const [text, setText] = useState('Click to copy!');

  const { x, y, clientX, clientY } = useCursorPosition();

  const handleCopyMailToClipboard = () => {
    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard.writeText(
        'faculedesma1993@gmail.com'
      );
    }
    setText('Copied!');
    setTimeout(() => {
      setText('Click to copy!');
    }, 2000);
    if (!isMobile) handleExpandImage();
  };

  useEffect(() => {
    if (isInViewport) {
      footerRef.current?.classList.add('show-footer');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (matrixRef.current && !isMobile && isInViewport) {
      const xSetted = Math.round(
        (clientX / window.innerWidth) * 100
      );
      const ySetted = Math.round(
        (clientY / window.innerHeight) * 100
      );
      matrixRef.current.animate(
        {
          clipPath: `circle(150px at ${xSetted}% ${ySetted}%)`
        },
        { duration: 1618 * 2, fill: 'forwards' }
      );
    }
  }, [x, y, clientX, clientY]);

  const handleFollowMouse = () => {
    const mouse = document.getElementById('mouse-follow');
    mouse?.classList.remove('lighted');
    mouse?.classList.remove('point');
  };

  const handleLeaveMouse = () => {
    const mouse = document.getElementById('mouse-follow');
    mouse?.classList.add('point');
  };

  const handleExpandImage = () => {
    if (matrixRef.current) {
      matrixRef.current.animate(
        {
          clipPath: `circle(2000px at 50% 50%)`
        },
        {
          duration: 1618,
          fill: 'forwards',
          easing: 'ease-out'
        }
      );
    }
  };

  return (
    <div
      className="container"
      onMouseEnter={handleFollowMouse}
      onMouseLeave={handleLeaveMouse}
    >
      <div ref={footerRef} id="contact" className="footer">
        <h1>Let's build something awesome!</h1>
        <div className="footer-mail">
          <p>faculedesma1993@gmail.com</p>
          <div className="footer-mail--icon">
            <MailEnvelop />
          </div>
          <div
            onClick={handleCopyMailToClipboard}
            className="footer-mail--copy"
          >
            <p>{text}</p>
          </div>
        </div>
        <div className="footer-social">
          <Social />
        </div>
        <div className="footer-copyright">
          <p>
            2023 <b>© Facundo Ledesma</b>
          </p>
        </div>
        <div className="footer-bg">
          <img
            ref={matrixRef}
            src={MatirxPNG}
            alt="matrix"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
