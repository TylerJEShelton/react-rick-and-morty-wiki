import React from 'react';
import styles from './Search.module.scss';

const Search = props => {
  const { setPageNumber, setSearch } = props;
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center mb-4 gap-4'>
      <input
        onChange={e => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        className={styles.input}
        placeholder='Search for Characters'
        type='text'
      />
      <button
        onClick={e => e.preventDefault()}
        className={`btn btn-primary ${styles.btn} fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
