import React, { useState } from 'react';
import CartButton from '../../components/CartButton';
import ProductList from '../../components/ProductList';
import SearchButton from '../../components/SearchButton';
import logo from '../../assets/logo.svg';
import styles from './ProductLanding.module.scss';
import { useAppContext } from '../../hooks/useAppContext';
import Navbar from '../../components/Navbar';
import Cart from '../Cart';

function ProductLanding() {
  const { addItem, products, cartItems } = useAppContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartQuantity: number = cartItems.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0,
  );

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.productLanding}>
        <div className={styles.actionButtons}>
          <SearchButton />
          <CartButton cartQuantity={cartQuantity} onClick={() => setIsCartOpen(true)} />
        </div>
      </div>

      <h1 className={styles.title}>
        <img src={logo} alt="Daily deals" />
      </h1>

      <Navbar />

      <ProductList addItem={addItem} cartItems={cartItems} products={products} />

      {isCartOpen && (
        <div>
          <Cart closeCart={() => setIsCartOpen(false)} />
          <button onClick={() => setIsCartOpen(false)}>Close Cart</button>
        </div>
      )}
    </main>
  );
}

export default ProductLanding;
