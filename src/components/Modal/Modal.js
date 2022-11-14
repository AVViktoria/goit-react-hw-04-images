import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({
  onClose,
  currentImageUrl,
  currentImageDescription,
}) {
  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && onClose();

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  const handleClickBackdrop = e => e.target === e.currentTarget && onClose();
  return createPortal(
    <div className={css.backdrop} onClick={handleClickBackdrop}>
      <div className={css.modal}>
        <button className={css.button} type="button" onClick={onClose}>
          Close
        </button>
        <img
          src={currentImageUrl}
          alt={currentImageDescription}
          loading="lazy"
        />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentImageUrl: PropTypes.string,
  currentImageDescription: PropTypes.string,
};
