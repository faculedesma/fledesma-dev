import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import MePNG from '@assets/images/me.webp';
import MeBGPNG from '@assets/images/me-bg.webp';
import './about-me.scss';
import { SecondaryButton } from '@components/buttons/SecondaryButton';

const AboutMe = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTopRef = useRef<HTMLDivElement>(null);
  const aboutBottomRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIntersection(
    aboutTopRef,
    isMobile ? -50 : -150
  );

  const isTopInViewport = useIntersection(
    aboutTopRef,
    isMobile ? -50 : -150
  );

  const isBottomInViewport = useIntersection(
    aboutBottomRef,
    isMobile ? -50 : -150
  );

  useEffect(() => {
    if (isInViewport) {
      aboutRef.current?.classList.add('show-section-title');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (isTopInViewport) {
      aboutTopRef.current?.classList.add(
        'show-about-me-left'
      );
    }
  }, [isTopInViewport]);

  useEffect(() => {
    if (isBottomInViewport) {
      aboutBottomRef.current?.classList.add(
        'show-about-me-right'
      );
    }
  }, [isBottomInViewport]);

  const handleClick = () => {
    const noteTwo = document.getElementById('note-two');
    noteTwo?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <section
        ref={aboutRef}
        id="about"
        className="about-me"
      >
        <h3>About me</h3>
        <div className="about-me--content">
          <div
            ref={aboutTopRef}
            className="about-me--content-left"
          >
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
          <div
            ref={aboutBottomRef}
            className="about-me--content-right"
          >
            <div className="about-me--content-right--intro">
              <h3>Hola.</h3>
              <h3>Hello.</h3>
              <h3>Ciao.</h3>
            </div>
            <div className="about-me--content-right--text">
              <p>
                I am Facundo! I'm a person whose life
                philosophy is based on creating positive and
                caring interactions with people. I love
                music, computers, and art. I graduated in
                Computer Science from the National
                University of Tucumán, <b>Argentina</b> in
                2018. I have been working as a software
                engineer for over +5 years, and in the past
                year, I started integrating design into my
                skillset. I love combining programming and
                art to build amazing things.
              </p>
              <p>
                I believe details make simplicity beautiful.
                Are you ready to build your dream project?
              </p>
            </div>
            <SecondaryButton
              label="Keep exploring"
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
