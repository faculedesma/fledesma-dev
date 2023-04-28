import { ChatGPT } from '@assets/svgs/ChatGPT';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-left">Feedback</div>
          <div className="footer-right">
            <p>
              Powered by <b>ChatGPT</b>
            </p>
            <ChatGPT />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
