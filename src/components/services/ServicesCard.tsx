import { ReactNode } from 'react';
import { SecondaryButton } from '@components/buttons/SecondaryButton';
import './services.scss';

interface IServices {
  id: string;
  label: string;
  description: string;
  icon: ReactNode;
}

interface IServicesCardProps {
  service: IServices;
}

export const ServicesCard: React.FC<IServicesCardProps> = ({
  service
}) => {
  const handleGetStartedClick = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id={service.id}
      className="services-list--card"
      onClick={handleGetStartedClick}
    >
      <div className="services-list--card-top">
        {service.icon}
        <h2>{service.label}</h2>
      </div>
      <div className="services-list--card-bottom">
        <p>{service.description}</p>
        <SecondaryButton label="Get started" />
      </div>
    </div>
  );
};
