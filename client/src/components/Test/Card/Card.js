import React from 'react';
import styles from './Card.module.scss';

const Card = ({ img, header, text }) => {
  return (
    <section className={styles.mainPageCard}>
      <div className={styles.pageCardInfo}>
        <span className={styles.pageCardHeader}>
          {img}
          <h3>{header}</h3>
        </span>
        <span>{text}</span>
      </div>
      <button>{'>'}</button>
    </section>
  );
};

export default Card;
