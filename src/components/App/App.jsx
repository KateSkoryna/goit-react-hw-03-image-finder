import React, { Component } from 'react';
import { Global } from '@emotion/react';
import { Container } from './Container.styled';
import { GlobalStyles } from './GlobalStyles.styled';
import Searchbar from 'components/Searchbar';

class App extends Component {
  render() {
    return (
      <>
        <Global styles={GlobalStyles} />
        <section>
          <Container>
            <h1>Hallo</h1>
            <Searchbar />
          </Container>
        </section>
      </>
    );
  }
}

export default App;
