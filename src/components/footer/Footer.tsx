import { MailEnvelop } from '@assets/svgs/MailEnvelop';
import { useState } from 'react';
import { Social } from '@components/social/Social';
import Spline from '@splinetool/react-spline';
import './footer.scss';

const Footer = () => {
  const [text, setText] = useState('Click to copy!');

  const handleCopyMailToClipboard = () => {
    navigator.clipboard.writeText(
      'faculedesma1993@gmail.com'
    );
    setText('Copied!');
    setTimeout(() => {
      setText('Click to copy!');
    }, 2000);
  };

  return (
    <div className="container">
      <div id="contact" className="footer">
        <h1>Let's build something awesome!</h1>
        <div className="footer-mail">
          <p>faculedesma1993@gmail.com</p>
          <div className="footer-mail--icon">
            <MailEnvelop />
          </div>
          <div
            onClick={handleCopyMailToClipboard}
            className="footer-mail--copy"
          >
            <p>{text}</p>
          </div>
        </div>
        <div className="footer-social">
          <Social />
        </div>
        <div className="footer-copyright">
          <p>
            2023 <b>© Facundo Ledesma</b>
          </p>
        </div>
        <div className="footer-canvas">
          <Spline scene="https://prod.spline.design/84izeqDlkxJCeAT1/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
