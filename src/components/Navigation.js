import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/search" data-testid="link-to-search" className="nav-btn">Search</Link>
        <Link
          to="/favorites"
          data-testid="link-to-favorites"
          className="nav-btn"
        >
          Favorite Songs
        </Link>
        <Link
          to="/profile"
          data-testid="link-to-profile"
          className="nav-btn"
        >
          Profile
        </Link>
      </nav>
    );
  }
}

export default Navigation;
