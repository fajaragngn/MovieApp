import React from "react";
import logo from "../tmdb-logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <footer className="footers">
      <div className="footer-info">
        <a
          href="https://developers.themoviedb.org/3/getting-started/introduction"
          target="_blank"
        >
          <img src={logo} alt="" />
        </a>
        
      </div>
      <br/>
      <center> <p><FontAwesomeIcon icon={faTerminal} /> Built with React ❤️</p> </center>
    </footer>
  );
}

export default Footer;
