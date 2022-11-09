import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loaderCover}>
      <ThreeDots
        height="70"
        width="70"
        radius="6"
        color="#0f225d;"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
