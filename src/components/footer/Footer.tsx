import { MailEnvelop } from "@assets/svgs/MailEnvelop";
import { Twitter } from "@assets/svgs/Twitter";
import { Behance } from "@assets/svgs/Behance";
import { Dribble } from "@assets/svgs/Dribble";
import { LinkedIn } from "@assets/svgs/LinkedIn";
import "./footer.scss";
import { useState } from "react";

const Footer = () => {
  const [text, setText] = useState("Click to copy!");

  const handleCopyMailToClipboard = () => {
    navigator.clipboard.writeText("faculedesma1993@gmail.com");
    setText("Copied!");
    setTimeout(() => {
      setText("Click to copy!");
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
          <Twitter />
          <Dribble />
          <Behance />
          <LinkedIn />
        </div>
        <div className="footer-copyright">
          <p>
            2023 <b>© Facundo Ledesma</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
