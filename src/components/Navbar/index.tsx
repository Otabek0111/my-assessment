import React from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles.navbar}>
      <div className={styles['navbar__link'] + ' ' + styles['navbar__link--active']}>Featured</div>
        <a href="#jeans" className={styles['navbar__link']}>Jeans</a>
        <a href="#pants" className={styles['navbar__link']}>Pants</a>
        <a href="#shorts" className={styles['navbar__link']}>Shorts</a>
        <a href="#tops" className={styles['navbar__link']}>Tops</a>
        <a href="#outerwear" className={styles['navbar__link']}>Outerwear</a>
        <a href="#accessories" className={styles['navbar__link']}>Accessories</a>
      </nav>
    </div>
  );
};

export default Navbar;

