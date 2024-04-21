import CartButton from '../../components/CartButton';
import ProductList from '../../components/ProductList';

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
      <CartButton
        cartQuantity={cartQuantity}
        className={styles.cartIconWrapper}
      />

      <h1 className={styles.title}>
        <img src={logo} alt="Daily deals" />
      </h1>
     
      <Navbar />

     
      {/* <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar__link">Featured</div>
        <div className="navbar__link">Jeans</div>
        <div className="navbar__link">Pants</div>
        <div className="navbar__link">Shorts</div>
        <div className="navbar__link">Tops</div>
        <div className="navbar__link">Outerwear</div>
        <div className="navbar__link">Accessories</div>
      </nav>
    </div> */}

      <ProductList
        addItem={addItem}
        cartItems={cartItems}
        products={products}
      />
    </main>
  );
}

export default ProductLanding;
