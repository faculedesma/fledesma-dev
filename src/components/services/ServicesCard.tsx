import { ReactNode } from 'react';
import { SecondaryButton } from '@components/buttons/SecondaryButton';
import './services.scss';
import Button from '@components/buttons/Button';

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
    <div id={service.id} className="services-list--card">
      <div className="services-list--card-top">
        {service.icon}
        <h2>{service.label}</h2>
        <p>{service.description}</p>
      </div>
      <div className="services-list--card-bottom">
        <Button
          variant="tertiary"
          size="md"
          trailingIcon="ChevronRight"
          data-cal-link="fledesma/30min?date=2024-11-25&month=2024-11"
          data-cal-config='{"theme":"dark"}'
        >
          {' '}
          Get Started
        </Button>
      </div>
    </div>
  );
};
