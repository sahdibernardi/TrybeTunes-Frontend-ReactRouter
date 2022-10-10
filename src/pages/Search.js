import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    artistName: '',
    buttonOn: true,
    isLoading: false,
    results: [],
    saveArtist: '',
  };

  handleSearchArtist = (event) => {
    // const { name } = this.state;
    this.setState({
      artistName: event.target.value,
    }, this.enableButton);
    // this.setState({
    //   saveArtist: artistName,
    // });
  };

  enableButton = () => {
    const { artistName } = this.state;
    return (
      artistName.length >= '2'
        ? this.setState({ buttonOn: false })
        : this.setState({ buttonOn: true })
    );
  };

  searchAPI = async (event) => {
    event.preventDefault();
    const { artistName } = this.state;
    this.setState({
      // saveArtist: artistName,
      isLoading: false,
      click: true,
    });
    const api = await searchAlbumsAPI(`${artistName}`);
    this.setState((prev) => ({
      isLoading: false,
      saveArtist: prev.artistName,
      artistName: '',
      results: api,
    }));
    // .then(this.setState({ isLoading: true }))
    // .then(console.log(artistName))
    // .then(this.setState({ searchResults: true }));
  };

  render() {
    const { artistName, buttonOn, isLoading, saveArtist, results, click } = this.state;
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
            onClick={ this.searchAPI }
          >
            Pesquisar
          </button>
        </form>
        { isLoading
          ? <Loading />
          : null }
        { click
          ? <div>{`Resultado de álbuns de: ${saveArtist}`}</div>
          : null}
        { (results.length > 0)
          ? (results.map((element, index) => (
            <li key={ index }>
              <Link
                to={ `/album/${element.collectionId}` }
                data-testid={ `link-to-album-${element.collectionId}` }
              >
                {element.collectionName}
              </Link>
            </li>
          )))
          : <div>Nenhum álbum foi encontrado</div>}
      </div>
    );
  }
}

export default Search;
