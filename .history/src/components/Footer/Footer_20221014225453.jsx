import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import {
  Footers,
  Pink,
  Social,
  Sidebar,
} from "./styles";


function Footer () {
    return (
       <Footers>
        <Pink>
          <div>
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
        <Sidebar>
          <div >
          </div>
          <div >
          </div>
        </Sidebar>
      </Footers>
    )
}

export default Footer;