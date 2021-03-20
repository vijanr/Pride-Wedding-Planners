import React, { Component } from "react";
//import { Link } from 'react-router-dom';

import "./index.css";
import "./contactinfo.css";
import logo from './images/couple3.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default class Contactinfo extends Component {
    render() {
        return (
          
            <form>
                <div className="heading">
                 <h2 className="testClass">Contact us on</h2>
                </div>
              <img src={logo} alt="Logo" />;
                <div className="social-container">
                <h4>@prideweddingplanners</h4>
                <a
                   href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social"
                >
        <FontAwesomeIcon icon={faYoutube} size="5x"  />
      </a>
      <a
        href="https://www.facebook.com/Pride-Wedding-Planners-100516545407395"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="5x" />
      </a>
      <a href="https://twitter.com/PlannersPride" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="5x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="5x"  />
      </a>
    </div>
            </form>
         
        );
    }
}

