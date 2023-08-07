import { Chart } from '@assets/svgs/Chart';
import { Processor } from '@assets/svgs/Processor';
import { Diamond } from '@assets/svgs/Diamond';
import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { ServicesCard } from './ServicesCard';
import SectionTitle from '@components/titles/SectionTitle';
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
    id: 'brand',
    label: 'Brand',
    description:
      'Create a brand appealing to your users and customers that align your strategy.',
    icon: <Diamond />
  }
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(servicesRef);

  useEffect(() => {
    if (isInViewport) {
      servicesRef.current?.classList.add('show-cards');
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <section className="services">
        <SectionTitle text="What I Do" />
        <div className="services-list" ref={servicesRef}>
          {servicesProvided.map((service) => {
            return (
              <ServicesCard
                key={service.id}
                service={service}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
