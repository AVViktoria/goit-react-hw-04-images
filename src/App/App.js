import { useState, useEffect } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from 'services/images-api';
import Searchbar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonLoad from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import css from '../App/App.module.css';
// import { SecurityUpdateGood } from '@mui/icons-material';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imagesOnPage] = useState(0);
  const [totalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [images] = useState(null);
  const [setError] = useState(null);
  // const [currentImageUrl, setCurrentImageUrl] = useState(null);
  // const [currentImageDescription, setCurrentImageDescription] = useState(null);

  //!     need to do it     //
  useEffect(() => {
    setIsLoading(state => !state);
    fetchImages(query, page)
      .then(({ hits, totalHits }) => {
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          description: hit.tags,
          smallImage: hit.webformatURL,
          largeImage: hit.largeImageURL,
        }));

        return this.setState({
          page: 1,
          images: imagesArray,
          imagesOnPage: imagesArray.length,
          totalImages: totalHits,
        });
      })

      //!    переделать              //
      // return setState(({ images, imagesOnPage }) => {
      //       // return {
      //       // images: [...images, ...imagesArray],
      //       setImages(prev => [...prev, image])

      //       // setImagesOnPage: imagesOnPage + imagesArray.length,
      //       setImagesOnPage(prev => prev + imagesOnPage.length),
      //       // };
      //     // });
      //   })
      .catch(error => setError(error))
      .finally(() => setIsLoading(state => !state));
  }, [query, page]);

  //!     need to ask about it     //
  // getSearchRequest = query => {
  //   this.setState({ query });
  // };
  const getSearchRequest = () => setQuery(query);

  //*       done             //
  const onNextFetch = () => {
    setPage(state => state + 1);
  };

  //*       done             //
  const toggleModal = () => {
    setShowModal(state => !state);
  };
  //!     need to do it     //
  const openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      return (
        setShowModal(!showModal) && currentImageUrl && currentImageDescription
      );
    }
  };

  // this.setState(({ showModal }) => ({
  //   showModal: !showModal,
  //   currentImageUrl: currentImageUrl,
  //   currentImageDescription: currentImageDescription,
  // }));

  return (
    <div className={css.App}>
      <Searchbar onSubmit={getSearchRequest} />

      {images && <ImageGallery images={images} openModal={openModal} />}

      {isLoading && <Loader />}

      {imagesOnPage >= 12 && imagesOnPage < totalImages && (
        <ButtonLoad onNextFetch={onNextFetch} />
      )}

      {showModal && (
        <Modal
          onClose={toggleModal}
          // currentImageUrl={currentImageUrl}
          // currentImageDescription={currentImageDescription}
        />
      )}

      <ToastContainer autoClose={3000} />
    </div>
  );
}

//*    componentDidUpdate          //

//  componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;

//     if (prevState.query !== query) {
//       this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
//       fetchImages(query)
//         .then(({ hits, totalHits }) => {
//           const imagesArray = hits.map(hit => ({
//             id: hit.id,
//             description: hit.tags,
//             smallImage: hit.webformatURL,
//             largeImage: hit.largeImageURL,
//           }));

//           return this.setState({
//             page: 1,
//             images: imagesArray,
//             imagesOnPage: imagesArray.length,
//             totalImages: totalHits,
//           });
//         })
//         .catch(error => this.setState({ error }))
//         .finally(() =>
//           this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
//         );
//     }

//     if (prevState.page !== page && page !== 1) {
//       this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

//       fetchImages(query, page)
//         .then(({ hits }) => {
//           const imagesArray = hits.map(hit => ({
//             id: hit.id,
//             description: hit.tags,
//             smallImage: hit.webformatURL,
//             largeImage: hit.largeImageURL,
//           }));

//           return this.setState(({ images, imagesOnPage }) => {
//             return {
//               images: [...images, ...imagesArray],
//               imagesOnPage: imagesOnPage + imagesArray.length,
//             };
//           });
//         })
//         .catch(error => this.setState({ error }))
//         .finally(() =>
//           this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
//         );
//     }
//   }
