// import { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../SearchBar/SearchBar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  // state = {
  //   query: '',
  // };

  const onChangeInput = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit(query);
    // const { onSubmit } = this.props;
    // const { query } = this.state;

    if (query.trim() === '') {
      toast.error("Please, enter some picture's name!", {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    onSubmit(query);
  };

  // const { query } = this.state;

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmitForm}>
        <button className={css.searchForm__button} type="submit">
          <span className={css.searchForm__label}></span>
        </button>

        <input
          className={css.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
