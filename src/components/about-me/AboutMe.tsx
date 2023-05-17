import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import MePNG from '@assets/images/me.png';
import MeBGPNG from '@assets/images/me-bg.png';
import './about-me.scss';
import { SecondaryButton } from '@components/buttons/SecondaryButton';

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
            <div className="about-me--content-right--intro">
              <h3>Hola.</h3>
              <h3>Hello.</h3>
              <h3>Ciao.</h3>
            </div>
            <div className="about-me--content-right--text">
              <p>
                I am Facundo! Then I started growing up,
                creating experiences. I like so many stuff
                that probably I can't sum it up. I love
                music, computers & art. Graduated in
                Computer Science in the National University
                of Tucumán, <b>Argentina</b> in 2018. Been
                coding around five years, and last one
                started integrating desing to the stack.
                Love to mix programming and art and build
                amazing stuff.
              </p>
              <p>
                LBeen coding around five years, and last one
                started integrating desing to the stack.
                Love to mix programming and art and build
                amazing stuff.
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
