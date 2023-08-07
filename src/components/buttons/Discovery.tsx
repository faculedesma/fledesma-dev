import { Phone } from '@assets/svgs/Phone';
import './discovery.scss';

export const Discovery = () => {
  return (
    <div>
      <div className="discovery">
        <a
          href="https://calendly.com/faculedesma1993/discovery-call"
          target="_blank"
          aria-label="Go to Calendy's to book a call."
        >
          <span>
            Book <b>free</b> discovery call
          </span>{' '}
          <Phone />
        </a>
      </div>
    </div>
  );
};
