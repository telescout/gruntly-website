import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import CTAButton from '../CTAButton';

export default function Footer(): JSX.Element {
  return (
    <section className={styles["footer-section"]}>
      <footer>
        <div className={styles["text"]}>Gruntly - Cutting through the chatter for you</div>
        <div className={styles["right"]}>
          <div className={styles["terms"]}><a href='/terms-of-service'>Terms</a></div>
          <div className={styles["privacy"]}><a href='/privacy'>Privacy</a></div>
          <div className={styles["copyright"]}>© {new Date().getFullYear()} Gruntly</div>
        </div>
      </footer>
    </section>
  )
}
