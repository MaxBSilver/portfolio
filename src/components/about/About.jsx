import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faChalkboardTeacher,
  faUserPlus,
  faTasks,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

import { Link, animateScroll as scroll } from "react-scroll";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerActive: true,
      bodyActive: true,
      footerActive: true
    };
  }
  handleHeaderChange = isVisible => {
    if (isVisible) {
      this.setState({ headerActive: false });
    }
  };
  handleBodyChange = isVisible => {
    if (isVisible) {
      this.setState({ bodyActive: false });
    }
  };
  handleFooterChange = isVisible => {
    console.log(isVisible);
    if (isVisible) {
      this.setState({ footerActive: false });
    }
  };
  render() {
    return (
      <div>
        <section className="about">
          <section className="about-header-container">
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
                        className="about-header"
                        style={{ opacity, marginLeft }}
                      >
                        About
                      </h1>
                      <div className="about-header-bar" style={{ opacity }} />
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </section>
          <VisibilitySensor
            active={this.state.bodyActive}
            onChange={this.handleBodyChange}
          >
            {({ isVisible }) => (
              <Spring
                delay={2700}
                to={{
                  marginTop: isVisible ? 0 : 50
                }}
              >
                {({ marginTop }) => (
                  <div
                    className="about-article-container"
                    style={{ marginTop }}
                  >
                    <Spring
                      delay={1100}
                      to={{
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {({ opacity }) => (
                        <article className="about-article" style={{ opacity }}>
                          <div className="hexagon">
                            <section className="about-article-top">
                              <FontAwesomeIcon
                                className="about-icon"
                                icon={faTasks}
                              />
                            </section>
                          </div>

                          <section className="about-article-body">
                            <h3>Organization</h3>
                            <p>
                              Strong believer in the importance of organization
                              and workflow
                            </p>
                          </section>
                        </article>
                      )}
                    </Spring>
                    <Spring
                      delay={1500}
                      to={{
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {({ opacity, marginTop }) => (
                        <article className="about-article" style={{ opacity }}>
                          <div className="hexagon">
                            <section className="about-article-top">
                              <FontAwesomeIcon
                                className="about-icon"
                                icon={faUserPlus}
                              />
                            </section>
                          </div>

                          <section className="about-article-body">
                            <h3>Accessible</h3>
                            <p>
                              Code emphasizes a desire for user accessibility
                              and responsiveness
                            </p>
                          </section>
                        </article>
                      )}
                    </Spring>
                    <Spring
                      delay={1900}
                      to={{
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {({ opacity, marginLeft }) => (
                        <article className="about-article" style={{ opacity }}>
                          <div className="hexagon">
                            <section className="about-article-top">
                              <FontAwesomeIcon
                                className="about-icon"
                                icon={faChalkboardTeacher}
                              />
                            </section>
                          </div>

                          <section className="about-article-body">
                            <h3>Curious</h3>
                            <p>Constantly striving to learn new technologies</p>
                          </section>
                        </article>
                      )}
                    </Spring>
                    <Spring
                      delay={2300}
                      to={{
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {({ opacity }) => (
                        <article className="about-article" style={{ opacity }}>
                          <div className="hexagon">
                            <section className="about-article-top">
                              <FontAwesomeIcon
                                className="about-icon"
                                icon={faComments}
                              />
                            </section>
                          </div>

                          <section className="about-article-body">
                            <h3>Communication</h3>
                            <p>Excellent team-oriented communication skills</p>
                          </section>
                        </article>
                      )}
                    </Spring>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor
            active={this.state.footerActive}
            onChange={this.handleFooterChange}
          >
            {({ isVisible }) => (
              <section className="about-article-footer-container">
                <Spring
                  delay={3000}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    marginRight: isVisible ? 0 : 400
                  }}
                >
                  {({ opacity, marginRight }) => (
                    <React.Fragment>
                    <div
                      className="about-article-footer-container-main"
                      style={{ opacity, marginRight }}
                    >
                      <h2>Who am I?</h2>
                      <p className="about-bio">
                        I'm a front-end software developer with a methodical
                        approach to problem solving. Ever curious, I always am
                        excited to learn and adapt to new technologies. I employ
                        strict organization to maintain a productive and
                        efficient workflow. I excel in team and group
                        environments through accountability, communication, and
                        dedication.
                      </p>
                    </div>
                    <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={550}
                  >
                    <button className="about-project-button" style={{opacity}}>
                      Projects <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Link>
                  </React.Fragment>
                  )}
                </Spring>
              </section>
            )}
          </VisibilitySensor>
        </section>
      </div>
    );
  }
}
