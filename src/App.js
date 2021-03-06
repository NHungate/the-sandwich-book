import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
