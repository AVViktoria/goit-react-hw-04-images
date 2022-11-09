import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  description,
  smallImage,
  largeImage,
  openModal,
}) {
  return (
    <li className={css.imageGalleryItem} onClick={openModal}>
      <img
        className={css.imageGalleryItem__image}
        src={smallImage}
        alt={description}
        data-large={largeImage}
      />
    </li>
  );
}

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
