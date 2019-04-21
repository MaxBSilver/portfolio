import React, { Component } from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Nav from "./components/nav/Nav";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Main id="top" />
        <Nav />
        <About id="about" />
        <Projects id="projects"/>
      </div>
    );
  }
}

export default App;
