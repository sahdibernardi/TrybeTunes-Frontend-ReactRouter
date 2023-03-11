import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TbPlaylist } from 'react-icons/tb';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import bgImage from '../midia/login-bg.jpg';

class Login extends React.Component {
  state = {
    buttonOn: true,
    name: '',
    isLoading: false,
  };

  handleAPI = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { name } = this.state;
    createUser(this.state)
      .then(this.setState({ isLoading: true }))
      .then(() => history.push('/search'))
      .then(console.log(name))
      // .then(console.log(event))
      .then(console.log(createUser(this.state)));
  };

  enableButton = () => {
    const { name } = this.state;
    return (
      name.length >= '3'
        ? this.setState({ buttonOn: false })
        : this.setState({ buttonOn: true })
    );
  };

  handleChange = (event) => {
    // const { name } = this.state;
    this.setState({ name: event.target.value }, this.enableButton);
  };

  render() {
    const { name, buttonOn, isLoading } = this.state;
    return (
      <div data-testid="page-login">
        {isLoading
          ? <Loading />
          : (
            <div className="login">
              <img src={ bgImage } alt="img" className="image-login" />
              <div className="form">
                <TbPlaylist id="logo" />
                <div className="headline">
                  <h1>All your music.</h1>
                  <h1>At the same place.</h1>
                </div>
                <form>
                  <label htmlFor="name">
                    <input
                      type="text"
                      id="name"
                      data-testid="login-name-input"
                      placeholder="your best email"
                      onChange={ this.handleChange }
                      name="name"
                      value={ name }
                    />
                  </label>
                  <button
                    type="submit"
                    data-testid="login-submit-button"
                    id="login-submit-button"
                    disabled={ buttonOn }
                    onClick={ this.handleAPI }
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf.isRequired,
  // history: PropTypes.shape({}).isRequired,
};

export default Login;
