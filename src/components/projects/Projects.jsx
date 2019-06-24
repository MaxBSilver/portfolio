import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faSass,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faStroopwafel, faCloud } from "@fortawesome/free-solid-svg-icons";

library.add(faJs, faStroopwafel, faReact, faSass, faGithub);
export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerActive: true,
      projectActive: true,
      partiallyVisible: true
    };
  }
  handleHeaderChange = isVisible => {
    if (isVisible) {
      this.setState({ headerActive: false });
    }
  };
  handleProjectChange = isVisible => {
    if (isVisible) {
      this.setState({ projectActive: false });
    }
  };

  render() {
    return (
      <section className="projects">
        <div className="project-header-container">
          <VisibilitySensor
            active={this.state.headerActive}
            onChange={this.handleHeaderChange}
            name="headerActive"
          >
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  opacity: isVisible ? 1 : 0,
                  marginLeft: isVisible ? 0 : 500
                }}
              >
                {({ opacity, marginLeft }) => (
                  <div>
                    <h1
                      className="project-header"
                      style={{ opacity, marginLeft }}
                    >
                      Projects
                    </h1>
                    <div className="project-header-bar" style={{ opacity }} />
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className="project-body-container">
          <VisibilitySensor
            active={this.state.projectActive}
            onChange={this.handleProjectChange}
            name="projectActive"
            partialVisibility={true}
          >
            {({ isVisible }) => (
              <Spring
                delay={1000}
                to={{
                  opacity: isVisible ? 1 : 0
                }}
              >
                {({ opacity }) => (
                  <div className="project-body" style={{ opacity }}>
                    <div className="project-container">
                      <img
                        alt="fox-board"
                        className="project-image"
                        src="https://i.imgur.com/gAFbZ2t.png"
                      />
                      <section className="project-info">
                        <h4>FoxFlexBox</h4>
                        <p>
                          <span className="project-info-title">Overview: </span>
                          A multi-level game to help the user develop skill with
                          CSS Flexbox. FoxFlexBox offers three difficulties that
                          utilize justify-content, align-content, align-items,
                          and flex-wrap to move a cartoon fox into a box.
                        </p>
                        <p>
                          <span className="project-info-title">
                            Built with:
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="react-icon"
                              icon={faReact}
                            />
                            React.js
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="sass-icon"
                              icon={faSass}
                            />
                            SASS
                          </span>
                        </p>
                        <p>
                          <span className="project-info-title">
                            Check it out on Github:
                          </span>
                          <a
                            href="https://maxbsilver.github.io/foxy-flexbox/"
                            className="main--contact-btn"
                          >
                            <FontAwesomeIcon
                              className="github-button"
                              icon={faGithub}
                            />
                          </a>
                        </p>
                      </section>
                    </div>
                    <div className="project-container">
                      <img
                        alt="fox-board"
                        className="project-image"
                        src="https://i.imgur.com/xx5iJUb.png"
                      />
                      <section className="project-info">
                        <h4>Weatherly</h4>
                        <p>
                          <span className="project-info-title">Overview: </span>
                          Leverages the ipAPI and WeatherBit API to provide the
                          user a real-time weather forecast.
                        </p>
                        <p>
                          <span className="project-info-title">
                            Built with:
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="react-icon"
                              icon={faReact}
                            />
                            React.js
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="api-icon"
                              icon={faCloud}
                            />
                            WeatherBit and ipAPI
                          </span>
                        </p>
                        <p>
                          <span className="project-info-title">
                            Check it out on Github:
                          </span>
                          <a
                            href="https://maxbsilver.github.io/foxy-flexbox/"
                            className="main--contact-btn"
                          >
                            <FontAwesomeIcon
                              className="github-button"
                              icon={faGithub}
                            />
                          </a>
                        </p>
                      </section>
                    </div>
                    <div className="project-container">
                      <img
                        alt="fox-board"
                        className="project-image"
                        src="https://i.imgur.com/xx5iJUb.png"
                      />
                      <section className="project-info">
                        <h4>Weatherly</h4>
                        <p>
                          <span className="project-info-title">Overview: </span>
                          Leverages the ipAPI and WeatherBit API to provide the
                          user a real-time weather forecast.
                        </p>
                        <p>
                          <span className="project-info-title">
                            Built with:
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="react-icon"
                              icon={faReact}
                            />
                            React.js
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="api-icon"
                              icon={faCloud}
                            />
                            WeatherBit and ipAPI
                          </span>
                        </p>
                        <p>
                          <span className="project-info-title">
                            Check it out on Github:
                          </span>
                          <a
                            href="https://maxbsilver.github.io/foxy-flexbox/"
                            className="main--contact-btn"
                          >
                            <FontAwesomeIcon
                              className="github-button"
                              icon={faGithub}
                            />
                          </a>
                        </p>
                      </section>
                    </div>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      </section>
    );
  }
}

export default Projects;
