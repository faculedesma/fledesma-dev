import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import MePNG from '@assets/images/me.png';
import MeBGPNG from '@assets/images/me-bg.png';
import './about-me.scss';

const AboutMe = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    aboutRef,
    isMobile ? -50 : -200
  );

  useEffect(() => {
    if (isInViewport) {
      aboutRef.current?.classList.add('show-section-title');
      aboutRef.current?.classList.add('show-about-me');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <section
        ref={aboutRef}
        id="about"
        className="about-me"
      >
        <h3>About me</h3>
        <div className="about-me--content">
          <div className="about-me--content-left">
            <div className="about-me--content-left--images">
              <img
                src={MePNG}
                alt="me"
                draggable="false"
                loading="lazy"
              />
              <img
                src={MeBGPNG}
                alt="me-bg"
                draggable="false"
                loading="lazy"
              />
            </div>
            <div className="about-me--content-left--bg"></div>
          </div>
          <div className="about-me--content-right">
            <p>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book. It has survived not only
              five centuries, but also the leap into
              electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book. It has survived not only
              five centuries, but also the leap into
              electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
