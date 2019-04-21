import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerActive: true
    };
  }
  handleHeaderChange = isVisible => {
    if (isVisible) {
      this.setState({ headerActive: false });
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
      </section>
    );
  }
}

export default Projects;
