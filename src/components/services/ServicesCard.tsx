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
  return (
    <div key={service.id} className="services-list--card">
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
