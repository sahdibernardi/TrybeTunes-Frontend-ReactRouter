import React from 'react';
import Header from '../components/Header';
// import { BrowserRouter } from 'react-router-dom';

class Search extends React.Component {
  state = {
    artistName: '',
    buttonOn: true,
  };

  handleSearchArtist = (event) => {
    // const { name } = this.state;
    this.setState({ artistName: event.target.value }, this.enableButton);
  };

  enableButton = () => {
    const { artistName } = this.state;
    return (
      artistName.length >= '2'
        ? this.setState({ buttonOn: false })
        : this.setState({ buttonOn: true })
    );
  };

  render() {
    const { artistName, buttonOn } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <p> SEARCH </p>
        <form>
          <label htmlFor="searchArtist">
            <input
              type="text"
              id="searchArtist"
              data-testid="search-artist-input"
              onChange={ this.handleSearchArtist }
              name="searchArtist"
              value={ artistName }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ buttonOn }
            // onClick={ this.handleAPI }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
