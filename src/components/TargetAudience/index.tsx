import React from 'react';
import styles from './styles.module.scss';
import CTAButton from '../CTAButton';

const audienceData = [
  {
    title: 'Professionals & Entrepreneurs',
    icon: '🌐',
    description: "The tech, finance, and startup sectors are buzzing with constant updates. Don't get buried under a mountain of information. Let Gruntly curate the essentials, ensuring you're always in the know without the stress."
  },
  {
    title: 'Content Creators & Researchers',
    icon: '📚',
    description: 'From tracking the latest trends to understanding niche discussions across platforms, the content world can be overwhelming. Gruntly ensures you have your finger on the pulse, only extracting what truly matters for your craft.'
  },
  {
    title: 'Investors & Analysts',
    icon: '💰',
    description: "Markets move fast, and a single piece of news can be the difference between profit and loss. Gruntly keeps you updated on pivotal announcements and market changes, tailored to your specific interests, ensuring you're always a step ahead."
  },
  {
    title: 'Busy Enthusiasts',
    icon: '🎨',
    description: 'Whether you\'re a vintage collector, a film buff, or part of a specific fandom, staying updated is crucial. Gruntly ensures you never miss out on essential updates, even when life gets in the way.'
  },
  {
    title: 'Decision Makers',
    icon: '🎯',
    description: 'Executives, managers, and team leads need distilled, relevant intel. Let Gruntly remove the noise, providing you with concise digests that impact your industry and business.'
  },
  {
    title: 'Freelancers & Consultants',
    icon: '✍️',
    description: 'When you\'re handling multiple clients or projects across various fields, information management is paramount. Gruntly streamlines this, ensuring you\'re updated, organized, and always delivering your best.'
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className={styles["target-audience-section"]}>
      <h2>Who Benefits from Gruntly?</h2>
      <p>Gruntly isn't just a tool; it's your personalized assistant...</p>
      {audienceData.map((segment, index) => (
        <div key={index} className={styles["audience-segment"]}>
          <h4>{segment.title} {segment.icon}</h4>
          <p>{segment.description}</p>
        </div>
      ))}
      <p>Everyone has a unique need for information. With Gruntly...</p>
      <div>
        <CTAButton telegramHandle="GruntlyBot" label="Get Started" />
      </div>
    </section>
  );
};

export default TargetAudience;
