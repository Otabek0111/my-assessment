import CartButton from '../../components/CartButton';
import ProductList from '../../components/ProductList';

import SearchButton from '../../components/SearchButton'; // Import the SearchButton component

import logo from '../../assets/logo.svg';

import styles from './ProductLanding.module.scss';
import { useAppContext } from '../../hooks/useAppContext';

import Navbar from '../../components/Navbar'; // Import Navbar component

function ProductLanding() {
  const { addItem, products, cartItems } = useAppContext();

  const cartQuantity: number = cartItems.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0,
  );

  return (
    <main className={styles.wrapper}>

    <div className={styles.productLanding}>
        <div className={styles.actionButtons}>
          <SearchButton />
          <CartButton cartQuantity={cartQuantity} />
        </div>
    </div>

      <h1 className={styles.title}>
        <img src={logo} alt="Daily deals" />
      </h1>
     
      <Navbar />

      <ProductList
        addItem={addItem}
        cartItems={cartItems}
        products={products}
      />
    </main>
  );
}

export default ProductLanding;
