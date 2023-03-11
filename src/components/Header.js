import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import Navigation from './Navigation';

class Header extends React.Component {
  state = {
    isLoading: true,
    user: '',
  };

  async componentDidMount() {
    const object = await getUser();
    const name = await object.name;
    this.setState({
      isLoading: false,
      user: name,
    });
  }

  render() {
    const { isLoading, user } = this.state;
    return (
      <>
        <header data-testid="header-component" className="header">
          { isLoading
            ? <Loading />
            : <h3 data-testid="header-user-name">{ user }</h3> }
        </header>
        <Navigation />
      </>
    );
  }
}

export default Header;
