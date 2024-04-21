// SearchButton.tsx
import React from 'react';
import searchIcon from '../../assets/search.svg'; // Path to your search icon image
import styles from './SearchButton.module.scss'; // Path to your SCSS module for the search button

const SearchButton: React.FC = () => {
  return (
    <button className={styles.searchButton}>
      <img src={searchIcon} alt="Search" />
    </button>
  );
};

export default SearchButton;
