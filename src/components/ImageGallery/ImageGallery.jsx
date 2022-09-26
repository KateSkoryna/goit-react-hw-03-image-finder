import { Container } from 'components/App/Container.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

import {
  GallerySection,
  ImageGalleryStyles,
  ImageGalleryItemStyles,
} from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <GallerySection>
      <Container>
        <ImageGalleryStyles>
          {items.map(({ id, ...restProps }) => (
            <ImageGalleryItemStyles key={id}>
              <ImageGalleryItem {...restProps} />
            </ImageGalleryItemStyles>
          ))}
        </ImageGalleryStyles>
      </Container>
    </GallerySection>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      restProps: PropTypes.node,
    })
  ),
};

export default ImageGallery;
