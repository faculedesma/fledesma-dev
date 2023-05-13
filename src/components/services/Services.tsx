import { SecondaryButton } from '@components/buttons/SecondaryButton';
import { Chart } from '@assets/svgs/Chart';
import { Processor } from '@assets/svgs/Processor';
import { Diamond } from '@assets/svgs/Diamond';
import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { ServicesCard } from './ServicesCard';
import { Technologies } from './Technologies';
import './services.scss';

const servicesProvided = [
  {
    id: 'design',
    label: 'Design',
    description:
      'Enhance your brand with modern and innovative design solutions.',
    icon: <Chart />
  },
  {
    id: 'development',
    label: 'Development',
    description:
      'Build robust and functional websites and applications for your business needs.',
    icon: <Processor />
  },
  {
    id: 'conversion',
    label: 'Conversion',
    description:
      'Turn website visitors into customers with effective SEO, CRO and user testing.',
    icon: <Diamond />
  }
];

const Services = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    servicesRef,
    isMobile ? -175 : -300
  );

  useEffect(() => {
    if (isInViewport) {
      servicesRef.current?.classList.add(
        'show-section-title',
        'show-cards'
      );
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={servicesRef} className="services">
        <h3>What I do</h3>
        <div className="services-list">
          {servicesProvided.map((service) => {
            return (
              <ServicesCard
                key={service.id}
                service={service}
              />
            );
          })}
        </div>
        <Technologies isMobile={isMobile} />
      </div>
    </div>
  );
};

export default Services;
