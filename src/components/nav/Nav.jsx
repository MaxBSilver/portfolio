import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faAddressBook,
  faFolderOpen,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";
export default class Nav extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav>
        <ul>
          <li onClick={this.scrollToTop}>
            Top
            <FontAwesomeIcon className="fa-icon" icon={faCaretUp} />{" "}
          </li>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={550}>
            <li>
              About
              <FontAwesomeIcon className="fa-icon" icon={faInfoCircle} />
            </li>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={550}
          >
            <li>
              Projects
              <FontAwesomeIcon className="fa-icon" icon={faFolderOpen} />
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={550}
          >
            <li>
              Contact
              <FontAwesomeIcon className="fa-icon" icon={faAddressBook} />
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}
