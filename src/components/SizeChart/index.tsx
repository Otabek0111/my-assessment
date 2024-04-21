import React from 'react';
import styles from './SizeChart.module.scss';

interface SizeChartProps {
  sizes: number[];
}

const SizeChart: React.FC<SizeChartProps> = ({ sizes }) => {
  return (
    <div className={styles['size-chart']}>
      {sizes.map((size, index) => (
        <button key={index} className={styles['size-chart__button']}>
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeChart;