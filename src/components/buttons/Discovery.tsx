import { PrimaryButton } from './PrimaryButton';
import './discovery.scss';

export const Discovery = () => {
  return (
    <div>
      <a
        href="https://calendly.com/faculedesma1993/discovery-call"
        target="_blank"
        aria-label="Go to Calendy's to book a call."
      >
        <PrimaryButton label="Book FREE Discovery Call" />
      </a>
    </div>
  );
};
