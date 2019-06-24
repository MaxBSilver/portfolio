import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-scroll";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  handleClick = () => {};
  render() {
    return (
      <main style={{ height: window.screen.availHeight + 100}}>
        <section className="main--information">
          <h1>
            Hello, I'm <span>Max Silver</span>.<br /> I'm a front-end web
            developer.
          </h1>
          <div className="main--contact-container">
            <button className="main--contact-btn">
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button className="main--contact-btn">
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button className="main--contact-btn">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={550}>
            <button className="main--show-more-button">
              View Portfolio <FontAwesomeIcon icon={faChevronCircleDown} />
            </button>
          </Link>
        </section>
      </main>
    );
  }
}
export default Main;
