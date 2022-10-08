import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p> ALBUM </p>
      </div>
    );
  }
}

export default Album;
