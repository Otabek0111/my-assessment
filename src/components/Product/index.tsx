import React from 'react';
import cx from 'classnames';

import Button from '../Button/index';
import Quantity from '../Quantity/index';

import { getImage } from '../../utils/images';

import styles from './Product.module.scss';
import { IProduct } from '../../hooks/useAppContext';
import imageTypes from '../../constants/imageTypes';

import Modal from '../ProductModal';
import close from '../../assets/close.svg';
import SizeChart from '../SizeChart';


interface IProductProps extends IProduct {
  isAdded?: boolean;
  isFeatured?: boolean;
  onClick?: () => void;
  onDecrement?: () => void;
  onIncrement?: () => void;
  className?: string;
  count?: number;
  description?: string;
}


const Product: React.FC<IProductProps> = ({
  className,
  count = 1,
  images,
  isAdded,
  isFeatured,
  onClick,
  onDecrement,
  onIncrement,
  price,
  title,
  description,
  
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const changeImage = (image: string) => { 
    return image;
  }

  const isInCart = onIncrement && onDecrement;
  const productClasses = cx(className, styles.product, {
    [styles.inProductLanding]: !isInCart,
    [styles.inCart]: isInCart,
    [styles.featured]: isFeatured,
    [styles.isAddable]: !isAdded,

  });

  const imageSrc = isFeatured
    ? getImage(images, imageTypes.DEFAULT_RT)
    : getImage(images);

    const imageMainSrc = getImage(images, imageTypes.DEFAULT_RT);
    const imageOneSrc = getImage(images, imageTypes.ALT_1_SQ);
    const imageTwoSrc = getImage(images, imageTypes.ALT_2_SQ);
    const imageThreeSrc = getImage(images, imageTypes.ALT_3_SQ);


  const finalPrice = (price * count).toFixed(2);

  return (
    <div className={productClasses}>
      <img className={styles.image} src={imageSrc} alt={title} onClick={openModal}/>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.modelOverlay}>

                <div className={styles.modal}>
                <div className={styles.modelContent}>
          

                  <div className={styles.imageCol}>

                  <div className={styles.imageContainer}>
                      <img className={styles.image} src={imageMainSrc} alt={title} />
                    </div>
                    <div className={styles.imageContainer}>
                      <img className={styles.image} src={imageOneSrc} alt={title} />
                    </div>
                    <div className={styles.imageContainer}>
                      <img className={styles.image} src={imageTwoSrc} alt={title} />
                    </div>
                    <div className={styles.imageContainer}>
                      <img className={styles.image} src={imageThreeSrc} alt={title} />
                    </div>
                  </div>


                  <div className={styles.imageContainer}>
                    <img className={styles.images} src={imageSrc} alt={title} />
                  </div>


                  <button className={styles.closeBtn} onClick={closeModal}>
                    <img src={close} alt="close" />
                  </button>
                  
                    <div className={styles.detailsContainer}>
                        <h2 className={styles.productTitle}>{title}</h2>
                        <p >${finalPrice} </p>
                        <p className={styles.descriptionTitle}>Description</p> 
                        <p className={styles.descriptionText}>{description}</p>
                          

                          <div className={styles.sizeQuantity}>
                          <div className={styles.sizeCol}>
                          <p className={styles.descriptionTitle}>Size</p> 
                          <SizeChart sizes={[1, 2, 3, 4]} />
                          </div>

                        <div className={styles.quantityBtn}>
                        <div className={styles.sizeCol}>
                        <p className={styles.descriptionTitleQuantity}>Quantity</p> 
                          <Quantity
                                  onIncrement={onIncrement}
                                  onDecrement={onDecrement}
                                  count={count} 
                                />
                          </div>

                        </div>
                        </div>
                              
                        {isInCart ? (
                              <Quantity
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                count={count}
                              />
                            ) : (
                              onClick && (
                                <Button
                                  className={styles.addButton}
                                  disabled={isAdded}
                                  onClick={onClick}
                                >
                                  {isAdded ? 'Added' : 'Add to Bag'}
                                </Button>
                              )
                            )}                     
                    </div>
                  </div>
                </div>
            </div>
        </Modal>

      <div className={styles.details}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.price}>${finalPrice}</span>
        </div>
        {isInCart ? (
          <Quantity
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            count={count}
          />
        ) : (
          onClick && (
            <Button
              className={styles.addButton}
              disabled={isAdded}
              onClick={onClick}
            >
              {isAdded ? 'Added' : 'Add to Bag'}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Product;
