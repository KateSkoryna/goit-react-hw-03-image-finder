import React, { Component } from 'react';

import fetchData from '/Users/Kate/Documents/GitHub/goit-react-hw-03-image-finder/src/services';
import { Global } from '@emotion/react';
import { AppBox } from './App.styled';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { GlobalStyles } from './GlobalStyles.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.value !== this.state.value
    ) {
      this.loadMorePhotos();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  loadMorePhotos = async () => {
    try {
      const loadMorePhoto = await fetchData(this.state.value, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...loadMorePhoto.hits],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  findImages = async ({ inputValue }) => {
    try {
      this.setState({ isLoading: true });
      const photos = await fetchData(inputValue, this.state.page);
      this.setState({
        value: inputValue,
        images: [...this.state.images, ...photos.hits],
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    console.log(this.state.page);
    return (
      <AppBox>
        <Global styles={GlobalStyles} />
        <Searchbar onSubmit={this.findImages} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery items={this.state.images} />
        )}
        {this.state.images.length === 0 ? (
          ''
        ) : (
          <Button onClick={this.loadMore} />
        )}
      </AppBox>
    );
  }
}

export default App;
