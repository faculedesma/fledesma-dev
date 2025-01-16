import { useRef, useEffect } from 'react';
import { Codesandbox, ChartPie, Code, Webhook } from 'lucide-react';

import { useIntersection } from '@components/hooks/useIntersection';
import SectionTitle from '@components/titles/SectionTitle';
import Button from '@components/buttons/Button';
import Palette from '@components/palette/Palette';
import useTheme from '@components/hooks/useTheme';

import './services.scss';
import { useMouseFollow } from '@components/hooks/useMouseFollow';

const servicesProvided = {
  design: {
    id: 'design',
    label: 'Design',
    description:
      'Elevate your brand with cutting-edge, innovative design solutions that captivate audiences and drive engagement.',
    icon: <ChartPie />
  },
  development: {
    id: 'development',
    label: 'Development',
    description:
      'Empower your business with reliable, high-performance websites and applications meticulously tailored to your unique needs.',
    icon: <Code />
  },
  brand: {
    id: 'brand',
    label: 'Brand Identity',
    description:
      'Create a brand that resonates with users, embodies their values, and aligns with your business strategy—building loyalty, enhancing recognition, and driving growth.',
    icon: <Codesandbox />
  },
  all: {
    id: 'all',
    label: 'All',
    description: 'All services.',
    icon: <Webhook />
  }
};

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(servicesRef);
  const matrixRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useTheme();

  useEffect(() => {
    if (isInViewport) {
      servicesRef.current?.classList.add('show-services');
    }
  }, [isInViewport]);

  const handleChangeRoundedBorder = () => {
    const body = document.body;
    body.style.setProperty('--size-border-radius-xs', `0.25rem`);
    body.style.setProperty('--size-border-radius-sm', `0.5rem`);
    body.style.setProperty('--size-border-radius-md', `1rem`);
    body.style.setProperty('--size-border-radius-lg', `1.25rem`);
    body.style.setProperty('--size-border-radius-xl', `2rem`);
    body.style.setProperty('--size-border-radius-full', `50%`);
  };

  const handleChangeSquareBorder = () => {
    const body = document.body;
    body.style.setProperty('--size-border-radius-xs', `0rem`);
    body.style.setProperty('--size-border-radius-sm', `0rem`);
    body.style.setProperty('--size-border-radius-md', `0rem`);
    body.style.setProperty('--size-border-radius-lg', `0rem`);
    body.style.setProperty('--size-border-radius-xl', `0rem`);
    body.style.setProperty('--size-border-radius-full', `0%`);
  };

  useMouseFollow(matrixRef, 'matrix', false);

  return (
    <div className="container">
      <section className="services" ref={servicesRef}>
        <SectionTitle text="Core Services" />
        <div className="services-content">
          <div className="services-content-design">
            <h5>{servicesProvided.design.label}</h5>
            <div className="services-content-design-content">
              <div className="services-content-design-content-blocks">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="services-content-design-content-text">Aa</p>
              <div className="services-content-design-content-token">
                <p>$color-text-brand</p>
              </div>
              <div className="services-content-design-content-blocks">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <p>{servicesProvided.design.description}</p>
          </div>
          <div className="services-content-development">
            <h5>{servicesProvided.development.label}</h5>
            <div className="services-content-development-content">
              <div className="services-content-development-content-buttons">
                <Button size="lg" variant="primary">
                  Button Label
                </Button>
                <Button size="lg" variant="secondary">
                  Button Label
                </Button>
                <Button size="lg" variant="tertiary" onClick={() => setTheme('slow')}>
                  Button Label
                </Button>
              </div>
              <div className="services-content-development-content-borders">
                <Button
                  size="lg"
                  variant="outline"
                  leadingIcon="Square"
                  onClick={handleChangeSquareBorder}
                />
                <Button
                  size="lg"
                  variant="outline"
                  leadingIcon="Circle"
                  onClick={handleChangeRoundedBorder}
                />
              </div>
            </div>
            <p>{servicesProvided.development.description}</p>
          </div>
          <div className="services-content-brand">
            <h5>{servicesProvided.brand.label}</h5>
            <div className="services-content-brand-preview">
              <Palette />
            </div>
            <div className="services-content-brand-icons">
              {Object.values(servicesProvided).map((service) => {
                return <div className="services-content-brand-icons-container">{service.icon}</div>;
              })}
            </div>
            <div className="services-content-brand-palette">
              <div className="services-content-brand-palette-boxes">
                <div ref={matrixRef} className="services-content-brand-palette-boxes-color">
                  <span></span>
                  <p>{theme === 'dark' ? '#000' : '#FFF'}</p>
                </div>
                <div className="services-content-brand-palette-boxes-color">
                  <span></span>
                  <p>{theme === 'dark' ? '#4D4' : '#CCC'}</p>
                </div>
                <div className="services-content-brand-palette-boxes-color">
                  <span></span>
                  <p>{theme === 'dark' ? '#333' : '#E6E'}</p>
                </div>
              </div>
            </div>
            <p>{servicesProvided.brand.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
