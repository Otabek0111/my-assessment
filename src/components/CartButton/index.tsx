import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import bag from '../../assets/bag.svg';

import styles from './CartButton.module.scss';

export interface Props {
  cartQuantity: number;
  className?: string;
  onClick: () => void;
}
const CartButton: React.FC<Props> = ({ className = '', cartQuantity, onClick }) => {
  const buttonClasses = cx(
    styles.button,
    { [styles.empty]: !cartQuantity },
    className,
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      <span className={styles.icon}>
        <img src={bag} alt="shopping bag" />
      </span>
      {!!cartQuantity && (
        <span className={styles.quantity}>{cartQuantity}</span>
      )}
    </button>
  );
};

export default CartButton;
