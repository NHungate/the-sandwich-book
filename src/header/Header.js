import React from 'react';
import { IndexLink } from 'react-router';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink
            className="navbar-brand"
            to="/"
            activeClassName="active"
            >
              Sandwich Book
            </IndexLink>
        </div>
      </div>
    </nav>
  )
};
