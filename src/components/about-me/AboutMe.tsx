import { useRef, useEffect } from 'react';

import { useIntersection } from '@components/hooks/useIntersection';
import SectionTitle from '@components/titles/SectionTitle';
import MePNG from '@assets/images/me.jpg';
import Button from '@components/buttons/Button';
import useDistortEffect from '@components/hooks/useDistortEffect';

import './about-me.scss';

const AboutMe = () => {
  const isMobile = window.innerWidth > 320 && window.innerWidth < 480;
  const aboutRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIntersection(aboutRef, isMobile ? -50 : -100);

  useDistortEffect('image-container', 'image-source');

  useEffect(() => {
    if (isInViewport) {
      aboutRef.current?.classList.add('show-about-me');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <section ref={aboutRef} id="about" className="about-me">
        <SectionTitle text="About me" />
        <section className="about-me--content">
          <div className="about-me--content-left">
            <div id="image-container" className="about-me--content-left--portrait">
              <img id="image-source" src={MePNG} alt="me" draggable="false" />
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
                I'm Facundo! I’m person with deeply cares about building meaningful connections with
                people. Passionate about computers, music, and art; I hold a Computer Science degree
                from the National University of Tucumán, Argentina (2018) and have over 4 years of
                experience as a software engineer. Over the past years, I’ve immersed myself in
                design, blending it with my technical skills to bring creative concepts to life.
              </p>
              <p>
                I believe details make simplicity beautiful. Are you ready to build your dream
                project?
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              trailingIcon="ExternalLink"
              data-cal-link="fledesma/30min?date=2024-11-25&month=2024-11"
              data-cal-config='{"theme":"dark"}'
            >
              Book FREE Discovery Call
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
