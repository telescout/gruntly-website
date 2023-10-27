import clsx from 'clsx';
import styles from './styles.module.scss';

import React from 'react';
import CTAButton from '../CTAButton';

const Pricing: React.FC = () => {
  return (
    <section className={styles["pricing-section"]}>

      <h2>Pricing & Subscription</h2>
      <p>Choose Your Ideal Plan with Gruntly</p>
      <p>At Gruntly, we believe in tailored experiences. Whether you're taking your first step into organized information or you're ready to dive deep into a multitude of channels, we have the perfect plan for you.</p>

      <div className={clsx(styles["plan"],styles["free-plan"])}>
        <h3>Free Plan</h3>
        <p><strong>For the Casual Curator</strong></p>
        <p><strong>Price</strong>: $0/month</p>
        <ul>
          <li>One Channel Monitoring: Perfect for those who want to focus on a single prime source.</li>
          <li>Daily Digest: Get a daily roundup of what's happening in your chosen channel.</li>
          <li>Custom Interests: Tailor your digest to topics that matter the most to you.</li>
          <li>24/7 Support: We're here to help, even on our free tier.</li>
        </ul>
        <p><strong>Ideal for</strong>: Beginners, hobbyists, and those taking a test drive of Gruntly's capabilities.</p>
        <CTAButton telegramHandle="GruntlyBot" label="Get Started for Free" />
      </div>

      <div className={clsx(styles["plan"],styles["full-plan"])}>
        <h3>Full Plan</h3>
        <p><strong>For the Information Aficionado</strong></p>
        <p><strong>Price</strong>: $5/month</p>
        <ul>
          <li>Multi-Channel Monitoring: Dive into up to 10 channels simultaneously.</li>
          <li>Enhanced Daily Digest: A comprehensive roundup from all your channels, curated with precision.</li>
          <li>Custom Interests Per Channel: Customize your interests for each individual channel.</li>
          <li>Priority Support: Get faster response times and premium assistance.</li>
          <li>Advanced Statistics: Deep dive into analyzed channels, messages, and more.</li>
        </ul>
        <p><strong>Ideal for</strong>: Professionals, content creators, investors, and anyone looking to maximize their information intake.</p>
        <CTAButton telegramHandle="GruntlyBot" label="Start 10-Days Free Trial" />
        <p><strong>Special Offer</strong>: Not sure if the Full Plan is for you? Try it out! We're giving every new user a <strong>10-days free trial</strong> of the Full Plan. Experience all the features without any commitments.</p>
      </div>

      <div className={styles["full-plan-description"]}>
        <h3>Why Subscribe to Full?</h3>
        <p>The digital world is vast and dynamic. By expanding your horizons with the Full Plan, you're ensuring that no critical information slips through the cracks. Whether it's a lucrative investment opportunity, a trend in your niche, or essential news from various sources, Gruntly's Full Plan ensures you're always in the know.</p>
      </div>

      <div className={styles["upgrade-info"]}>
        <h3>Upgrade Anytime</h3>
        <p>Starting with our Free Plan? No worries. You can upgrade to the Full Plan anytime, and the world of multi-channel monitoring will be at your fingertips.</p>
      </div>

      <div className={styles["get-started-section"]}>
        <h3>Get Started with Gruntly Today</h3>
        <p>Dive into a world where information is not overwhelming but empowering. Choose your plan and let Gruntly curate the noise for you.</p>
      </div>

    </section>
  );
};

export default Pricing;
