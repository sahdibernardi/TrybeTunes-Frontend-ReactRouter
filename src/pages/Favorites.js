import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p> FAVORITES </p>
      </div>
    );
  }
}

export default Favorites;
