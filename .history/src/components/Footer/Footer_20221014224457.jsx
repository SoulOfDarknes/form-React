import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import {
  Footers,
  Pink,
  Social,
} from "./styles";

import "../Footer/Footer.scss";

function Footer () {
    return (
       <Footers>
        <Pink>
          <div className="footer__pink-smile">
            <img src="img/pink_smile_footer.png" alt="pink-smile" />
          </div>
          </Pink>
        <Social>
          <a target="_blank" rel="noreferrer"
            href="https://www.linkedin.com/in/vasyl-pylypenko-58956a225/"   >
            <FontAwesomeIcon  icon={faLinkedin} />
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://twitter.com/" >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100000396959240" >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://www.pinterest.com/" >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          </Social>
        
        <div className="footer__smiles">
          <div className="footer__smiles-first">

          </div>
          <div className="footer__smiles-second">

          </div>
        </div>
      </Footers>
    )
}

export default Footer;