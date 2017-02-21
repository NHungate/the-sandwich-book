import React from 'react';
import { IndexLink } from 'react-router';

export default () => {
  return (
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <IndexLink
            className="nav-item"
            to="/"
            activeClassName="is-active"
            >
              Sandwich Book
          </IndexLink>
        </div>
        <div className="nav-right is-hidden-mobile">
          <IndexLink
            className="nav-item is-tab"
            to="/"
            activeClassName="is-active"
            >
              Home
          </IndexLink>
        </div>
      </div>
    </nav>
  )
};
