import React from 'react';
import styles from './ProductModal.module.scss'; 

// import close from '../../assets/close.svg';

const Modal = ({ isOpen, children, onClose }: { isOpen: boolean, children: React.ReactNode, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
        <div className={styles.modalContent}>
          {children}
        </div>
    
  );
};

export default Modal;
