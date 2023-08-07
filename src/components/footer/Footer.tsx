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
import Logo from '@components/logo/Logo';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@database/firebase';
import './footer.scss';

const Footer = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [interest, setInterest] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [error, setError] = useState<string>('');

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

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setInterest('');
    setMessage('');
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event?.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSucess(false);

    try {
      const docRef = collection(db, 'contact-form');
      await addDoc(docRef, {
        firstName,
        lastName,
        email,
        country,
        interest,
        message
      });
      setIsSubmitting(false);
      setSucess(true);
      clearForm();
    } catch (error) {
      setIsSubmitting(false);
      setSucess(false);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <section
        ref={footerRef}
        id="contact"
        className="footer"
      >
        <div className="footer-content">
          <section className="footer-content--left">
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
          </section>
          <section className="footer-content--right">
            <form onSubmit={handleSubmit}>
              <div className="form-names">
                <input
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                  required
                  type="text"
                  placeholder="First Name"
                  className="input-small"
                />
                <input
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                  required
                  type="text"
                  placeholder="Last Name"
                  className="input-small"
                />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email address"
                className="input-large"
              />
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                type="text"
                placeholder="Country"
                className="input-large"
              />
              <select
                value={interest}
                onChange={(e) =>
                  setInterest(e.target.value)
                }
                required
                className={`input-large ${
                  interest === ''
                    ? 'select-placeholder'
                    : ''
                }`}
              >
                <option
                  value=""
                  className="option-placeholder"
                >
                  I'm interested in
                </option>
                <option value="web-desing-dev">
                  Web Desing & Development
                </option>
                <option value="design-only">
                  Web Design only
                </option>
                <option value="dev-only">
                  Web development only
                </option>
                <option value="brand">
                  Brand (Logo, Design & Development)
                </option>
              </select>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
              {error && (
                <div className="form-error">
                  <p>
                    There was an error submitting the data.
                    Please try again.
                  </p>
                </div>
              )}
            </form>
          </section>
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
