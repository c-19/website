/*
 * Copyright (c) 2018 - 2018,  C19, all rights reserved.
 *
 * This software is licensed under under GPL-3.0-only or GPL-3.0-or-later, https://opensource.org/licenses/GPL-3.0
 */

import React, { Component } from 'react';
import logo from './images/logo.svg';
import logo_gray from './images/logo_grayscale.svg';
import './App.css';

import Menu from './Menu.js';
import Section from './Section.js'

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={logo} className="background-app-logo" alt="logo" />
          <header className="App-header">
              <img src={logo} className="header-app-logo" alt="c19" />
              <h1>c19.io</h1>
        </header>
          <Menu items={[
              {
                  href: "#About",
                  title: "About"
              },
              {
                  href: "#Projects",
                  title: "Projects"
              }
          ]}/>
          <div id="content">
        <div className="section-container">
            <Section title="About">
                <p>This site is still under construction but will be the home of a number of different projects.</p>
            </Section>
            <Section title="Projects">
                <p><a href="https://github.com/c-19/cap">Composable Automation Platform</a></p>
            </Section>
        </div>
          </div>
        <footer>
            <img src={logo_gray} className="footer-app-logo" alt="c19" />
            <h1>Copyright &copy; 2018, c19.io</h1>
        </footer>
      </div>
    );
  }
}

export default App;
