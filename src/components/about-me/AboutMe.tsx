import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { Discovery } from '@components/buttons/Discovery';
import SectionTitle from '@components/titles/SectionTitle';
import MePNG from '@assets/images/me.webp';
import './about-me.scss';

const AboutMe = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const aboutRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIntersection(
    aboutRef,
    isMobile ? -50 : -100
  );

  useEffect(() => {
    if (isInViewport) {
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
        <SectionTitle text="About me" />
        <section className="about-me--content">
          <div className="about-me--content-left">
            <div className="about-me--content-left--portrait">
              <img src={MePNG} alt="me" draggable="false" />
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
                I'm Facundo! A person who believes in
                building meaningful and positive connections
                with others. My passions span across
                computer, music, and art. Graduating with a
                degree in Computer Science from the National
                University of Tucumán, Argentina (2018),
                I've gain over 4 years of experience working
                as a software engineer. Over the past year,
                I've dive in the world of design, mixing it
                with my technical abbilities. The fusion of
                programming and artistic expression allows
                me to bring captivating concepts to life.
              </p>
              <p>
                I believe details make simplicity beautiful.
                Are you ready to build your dream project?
              </p>
            </div>
            <Discovery />
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
