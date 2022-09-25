import { Container } from 'components/App/Container.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

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

export default ImageGallery;
