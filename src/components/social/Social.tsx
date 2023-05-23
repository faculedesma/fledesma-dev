import { Twitter } from '@assets/svgs/Twitter';
import { Behance } from '@assets/svgs/Behance';
import { Dribble } from '@assets/svgs/Dribble';
import { LinkedIn } from '@assets/svgs/LinkedIn';
import './social.scss';

export const Social = () => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/facundo-ledesma/"
        target="_blank"
        aria-label="Go to Facundo's LinkedIn account."
      >
        <LinkedIn />
      </a>
      <a
        href="https://www.behance.net/facundoledesma5"
        target="_blank"
        aria-label="Go to Facundo's Behance account."
      >
        <Behance />
      </a>
      <a
        href="https://dribbble.com/fledesma"
        target="_blank"
        aria-label="Go to Facundo's Dribble account."
      >
        <Dribble />
      </a>
      <a
        href="https://twitter.com/faculedesma93"
        target="_blank"
        aria-label="Go to Facundo's Twitter account."
      >
        <Twitter />
      </a>
    </div>
  );
};
