import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

class Loading extends React.Component {
  render() {
    return (
      <div className="loading-div">
        <div className="loader" />
        <p className="loading">Loading...</p>
      </div>
    );
  }
}

export default Loading;
