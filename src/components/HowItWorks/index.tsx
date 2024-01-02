import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import CTAButton from '../CTAButton';

export default function HowItWorks(): JSX.Element {
  return (
    <section className={styles["howitworks-section"]}>
      <div className={styles["description"]}>
        <p>Gruntly, your personal intelligent assistant, curates daily digests from your chosen Telegram channels and groups.</p>
        <p>It keeps you updated on diverse interests like job openings, rare sneaker drops, or invites to hiking in Sicily mountains, ensuring effortless, relevant-only information flow.</p>
      </div>
      <h2>How It Works</h2>
      <div className={styles["steps"]}>
        <div className={styles["step"]}>
          <div className={styles["step-number"]}>1</div>
          <div className={styles["step-text"]}>
            <h3>Specify Your Interests</h3>
            <p>Inform Gruntly about your current focus areas and interests on Telegram</p>
          </div>
          <div className={styles["step-img"]}>
            <img src="/img/message-bio.svg" width={304} height={173} alt="I'm passionate about hiking and kayaking. I'm always looking for updates on trail conditions and community events related to outdoor adventures. Keeping an eye on gear sales and travel deals is also something I value."/>
          </div>
        </div>
        <div className={styles["step"]}>
          <div className={styles["step-number"]}>2</div>
          <div className={styles["step-text"]}>
            <h3>Share Your Sources</h3>
            <p>Provide Gruntly with channel names, group invites, or simply forward a Telegram message</p>
          </div>
          <div className={styles["step-img"]}>
            <img src="/img/message-links.svg" width={310} height={114} alt="Telegram channel links"/>
          </div>
        </div>
        <div className={styles["step"]}>
          <div className={styles["step-number"]}>3</div>
          <div className={styles["step-text"]}>
            <h3>Enjoy Your Personal Digest</h3>
            <p>That's it! Relax and receive your tailored daily digest, featuring only the messages relevant to you</p>
          </div>
          <div className={styles["step-img"] + ' ' + styles["step-img-digest"]}>
            <img src="/img/message-digest.svg"  width={321} height={197} alt="🌟 Good Day! Here's Your Digest from Gruntly 🌟 Hi there! Gruntly here, reporting in with the day's relevant snippets curated just for you. Dive in!"/>
          </div>
        </div>
        <div className={styles["step"]}>
          <div className={styles["step-number"] + ' ' + styles["step-number-last"]}></div>
          <div>
            <CTAButton telegramHandle="GruntlyBot" label="Join Gruntly on Telegram!" />
          </div>
          <div></div>
        </div>
      </div>

    </section>
  )
}
