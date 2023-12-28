import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import CTAButton from '../CTAButton';

export default function Support(): JSX.Element {
  return (
    <section className={styles["support-section"]}>
      <h2>Support</h2>
      <div>
        <p>For any other questions or immediate support, please don't hesitate to <a href='https://t.me/gruntly_support_bot'>reach out</a> to our dedicated support team.<br/>We're here to assist you!</p>
      </div>
    </section>
  )
}
