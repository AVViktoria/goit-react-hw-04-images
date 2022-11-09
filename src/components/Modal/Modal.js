import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// import { cssTransition } from 'react-toastify';
import css from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default function Modal() {
  // const componentDidMount = () => {
  //   window.addEventListener('keydown', handleKeyDown);
  // };

  // const componentWillUnmount = () => {
  //   window.removeEventListener('keydown', handleKeyDown);
  // };

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      // this.props.onClose();
    }
  };

  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  // render() {
  const { onClose, currentImageUrl, currentImageDescription } = this.props;

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
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  currentImageUrl: PropTypes.string,
  currentImageDescription: PropTypes.string,
};
