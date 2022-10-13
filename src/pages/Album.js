import React from 'react';
import propTypes from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusic from '../services/musicsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  state = {
    musics: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const album = await getMusic(id);
    this.setState({
      musics: album,
    });
  }

  render() {
    const { musics } = this.state;
    // const { match: { params: { id } } } = this.props;
    return (
      <div data-testid="page-album">
        <Header />
        <p> ALBUM </p>
        <div>
          { musics.length > 0
            ? (
              <div>
                <img
                  alt={ musics[0].alt }
                  src={ musics[0].artworkUrl100 }
                />
                <h2 data-testid="artist-name">
                  { musics[0].artistName }
                </h2>
                <h4 data-testid="album-name">
                  { musics[0].collectionName }
                </h4>
                <MusicCard tracks={ musics } />
              </div>
            )
            : <Loading /> }
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};

export default Album;
