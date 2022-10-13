import React from 'react';
import propTypes from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    favoriteCheck: false,
    selectedSongID: '',
    favMusicObject: '',
    loading: false,
    favoriteSongs: [{ trackId: 10 }, {}],
  };

  handleCheckboxClick = (event) => {
    const song = event.target.name;
    const { favoriteSongs } = this.state;
    console.log(song);
    if (favoriteSongs.some((track) => track.trackId === (Number(song)))) {
      // console.log('eureka!');
      const newFavorites = favoriteSongs.filter(
        (track) => track.trackId !== Number(song),
      );
      console.log(newFavorites);
      this.setState({
        favoriteSongs: newFavorites });
    } else {
      this.setState({ selectedSongID: song,
        favoriteCheck: true }, this.getFavoriteSong);
    }
  };

  getFavoriteSong = () => {
    const { selectedSongID } = this.state;
    const { tracks } = this.props;
    const musicObject = tracks.filter(
      (track) => track.trackId === Number(selectedSongID),
    );
    this.setState({ favMusicObject: musicObject[0] }, this.addFavoriteSong);
  };

  addFavoriteSong = async () => {
    const { favoriteCheck, favMusicObject } = this.state;
    // console.log('calling function');
    // const { songs } = this.props;
    if (favoriteCheck === true) {
      this.setState({ loading: true });
      await addSong(favMusicObject);
      this.setState(((prevState) => ({
        loading: false,
        favoriteSongs: [...prevState.favoriteSongs, favMusicObject],
      })));
    }
  };

  render() {
    const { tracks } = this.props;
    const { loading, favoriteSongs } = this.state;
    // const { loading, favoriteSongs, selectedSongID } = this.state;
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
            <label
              htmlFor="favorite"
              // data-testid={ `checkbox-music-${track.trackId}` }
            >
              Favorita
              <input
                data-testid={ `checkbox-music-${track.trackId}` }
                id="favorite"
                type="checkbox"
                name={ track.trackId }
                key={ track.trackId }
                checked={
                  favoriteSongs.some((song) => track.trackId === song.trackId)
                }
                // checked={ (event) => event.target === true }
                onChange={ this.handleCheckboxClick }
              />
            </label>
          </div>
        ) : null)) }
        { loading ? <Loading /> : null }
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
