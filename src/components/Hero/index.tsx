import React from 'react';
import styles from './styles.module.scss';

export default function Hero(): JSX.Element {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["subheader"]}>Lost in the chaos of too many messages?</div>
        <h1 className={styles["header"]}>
          Gruntly Filters the Noise, Delivering Only <div className={styles["highlighted"]}>Relevant<img src="/img/highlighter.webp" className={styles["highlightedImg"]} alt='highliter'></img><img src="/img/highlighter.webp" className={styles["highlightedImg2"]} alt='highliter'></img></div> Telegram Updates</h1>
        <div className={styles["cta"]}>
          <div className={styles["content"]}>
            Find Out How
          </div>
        </div>
      </div>
    </section>
  )
}
