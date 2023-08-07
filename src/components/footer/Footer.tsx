import {
  useState,
  useRef,
  useEffect,
  FormEvent
} from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { Social } from '@components/social/Social';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import Lottie from 'lottie-react';
import SuccessJSON from '@assets/animations/congrats.json';
import './footer.scss';
import Logo from '@components/logo/Logo';

const Footer = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const footerRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    footerRef,
    isMobile ? -50 : -150
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSucess] = useState(false);

  useEffect(() => {
    if (isInViewport) {
      footerRef.current?.classList.add('show-footer');
    }
  }, [isInViewport]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event?.preventDefault();
    setIsSubmitting(true);
    setSucess(false);
    setTimeout(() => {
      setIsSubmitting(false);
      setSucess(true);
    }, 2000);
  };

  return (
    <div className="container">
      <section
        ref={footerRef}
        id="contact"
        className="footer"
      >
        <div className="footer-content">
          <div className="footer-content--left">
            <div className="footer-content--left-titles">
              <h2>Let's build something together.</h2>
              <p>
                I’m open to freelance opportunities or a
                remote position. Also, feel free to reach
                out if you need a hand on your side/open
                source project. I would love to help.
              </p>
            </div>
            <div className="footer-content--left-bottom">
              <Social />
            </div>
          </div>
          <div className="footer-content--right">
            <form onSubmit={handleSubmit}>
              <div className="form-names">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="input-small"
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="input-small"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email address"
                className="input-large"
              />
              <input
                required
                type="text"
                placeholder="Country"
                className="input-large"
              />
              <input
                required
                type="text"
                placeholder="I'm interested in"
                className="input-large"
              />
              <textarea
                placeholder="Message"
                maxLength={300}
              />
              <PrimaryButton
                label="Get in touch"
                loading={isSubmitting}
              />
              {success && (
                <div className="form-success">
                  <Lottie
                    animationData={SuccessJSON}
                    loop={true}
                    style={{ height: 50, width: 50 }}
                  />
                  <p>
                    Your form was submitted! I'll get back
                    to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
        <section className="footer-bottom">
          <div className="footer-bottom--divider"></div>
          <div className="footer-bottom--content">
            <div className="footer-bottom--content-copyright">
              <p>
                <b>© Facundo Ledesma</b>
              </p>
              <p>2023 All rights reserved.</p>
            </div>
            <div className="footer-bottom--content-logo">
              <Logo />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Footer;
