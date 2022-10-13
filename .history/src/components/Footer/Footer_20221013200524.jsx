import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

import "../Footer/Footer.scss";

function Footer () {
    return (
      <div className="footer">
        <div className="footer__pink">
          <div className="footer__pink-smile">
          </div>
        </div>
        <div className="footer__social">
          <a 
            href="https://www.linkedin.com/in/vasyl-pylypenko-58956a225/" className="footer__sicial-icon" >
            <FontAwesomeIcon  icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/" className="footer__sicial-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100000396959240" className="footer__sicial-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.pinterest.com/" className="footer__sicial-icon">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
        <div className="footer__smiles">
          <div className="footer__smiles-first">

          </div>
          <div className="footer__smiles-second">

          </div>
        </div>
      </div>
    )
}

export default Footer;