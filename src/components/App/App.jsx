import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchData from '../services';
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
      this.findImages();
    }
  }

  addValue = ({ inputValue }) => {
    if (inputValue !== this.state.value) {
      this.setState({
        value: inputValue,
        images: [],
        page: 1,
      });
    } else {
      this.setState({
        value: inputValue,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  findImages = async () => {
    try {
      this.setState({ isLoading: true });
      const photos = await fetchData(this.state.value, this.state.page);
      return photos.hits.length === 0
        ? Notify.failure(
            'Sorry! There is no photo with this name. Try something else!'
          )
        : this.setState(prevState => ({
            images: [...prevState.images, ...photos.hits],
          }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <AppBox>
        <Global styles={GlobalStyles} />
        <Searchbar onSubmit={this.addValue} />
        {isLoading && images.length === 0 ? (
          <Loader />
        ) : (
          <ImageGallery items={images} />
        )}
        {images.length === 0 ? '' : <Button onClick={this.loadMore} />}
      </AppBox>
    );
  }
}

export default App;
