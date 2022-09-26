import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWondow, ModalImage } from './Modal.styled';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  handleClickByEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleClickByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickByEscape);
  }

  render() {
    const { image, tags } = this.props;
    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalWondow>
          <ModalImage src={image} alt={tags} />
        </ModalWondow>
      </Overlay>
    );
  }
}
export default Modal;
