import React from 'react';
import Header from '../components/Header';
// import { BrowserRouter } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p> PROFILE </p>
      </div>
    );
  }
}

export default Profile;
