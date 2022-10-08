import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    isLoading: true,
    user: '',
  };

  async componentDidMount() {
    // const { isLoading, user } = this.state;
    const object = await getUser();
    const name = await object.name;
    this.setState({
      isLoading: false,
      user: name,
    });
  }

  render() {
    const { isLoading, user } = this.state;
    // console.log(user);
    return (
      <header data-testid="header-component">
        { isLoading
          ? <Loading />
          : <p data-testid="header-user-name">{ user }</p> }
      </header>
    );
  }
}

export default Header;
