import React from 'react';
import propTypes from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';

class MusicCard extends React.Component {
  render() {
    const { tracks } = this.props;
    return (
      <div>
        <p>Songs</p>
        { tracks.map((track, index) => (index > 0 ? (
          <div key={ index }>
            { track.trackName }
            <audio data-testid="audio-component" src={ track.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
            {/* { track.previewUrl } */}
          </div>
        ) : null)) }
      </div>
    );
  }
}

MusicCard.propTypes = {
  tracks: propTypes.arrayOf(propTypes.shape({
    trackName: propTypes.string,
    previewUrl: propTypes.string,
  })).isRequired,
};

export default MusicCard;
