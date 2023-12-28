import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles["testimonials-section"]}>
      <h2>Hear from Our Users</h2>
      <div className={styles["wrapper"]}>
        <div className={styles["testimonial"]}>
          <img src="/img/message-1.svg" />
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-2.svg" />
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-3.svg" />
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-4.svg" />
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-5.svg" />
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-6.svg" />
        </div>
      </div>
    </section>
  )
}
