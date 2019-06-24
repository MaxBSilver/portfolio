import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faSass,
  faGithub,
  faEvernote,
  faNode
} from "@fortawesome/free-brands-svg-icons";

library.add(faJs, faReact, faSass, faGithub, faEvernote, faNode);
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
                        alt="helms-keep"
                        className="project-image"
                        src="https://i.imgur.com/71bS5tW.png"
                      />
                      <section className="project-info">
                        <h4>HelmsKeep</h4>
                        <p>
                          <span className="project-info-title">Overview: </span>
                          A medieval, gameified version of the popular
                          application Google Keep.
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
                            React.js and Redux
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="node-icon"
                              icon={faNode}
                            />
                            Node.js and Express
                          </span>
                        </p>
                        <p>
                          <span className="project-info-title">
                            Check it out on Github:
                          </span>
                          <a
                            href="https://github.com/MaxBSilver/helms-keep"
                            className="main--contact-btn"
                            target="blank"
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
                        src="https://i.imgur.com/PLe7buo.jpg"
                      />
                      <section className="project-info">
                        <h4>Movie Tracker</h4>
                        <p>
                          <span className="project-info-title">Overview: </span>
                          Utilizing TheMovieDB users can view the latest movies.
                          Users can create an account and favorite movies they
                          want to watch later.
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
                            React.js and Redux
                          </span>
                          <span className="tech-stack-container">
                            <FontAwesomeIcon
                              className="evernote-icon"
                              icon={faEvernote}
                            />
                            PostgreSQL
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
                            href="https://github.com/MaxBSilver/Movie-Tracker"
                            className="main--contact-btn"
                            target="blank"
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
                            href="https://github.com/MaxBSilver/foxy-flexbox"
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
