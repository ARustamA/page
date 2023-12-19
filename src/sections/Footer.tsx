import { ReactComponent as Github } from '../assets/skills/github.svg';
import { ReactComponent as Telegram } from '../assets/icons/Telegram.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <p>
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </p>
        <p>
          <h3>Copyright © {year} SB</h3>
        </p>
        <div>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Telegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
