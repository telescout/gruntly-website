import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles["testimonials-section"]}>
      <h2>Hear from Our Users</h2>
      <div className={styles["wrapper"]}>
        <div className={styles["testimonial"]}>
          <img src="/img/message-1.svg" width={340} height={184} alt="With multiple startups under my wing, staying updated became a chore. Gruntly curates all the news I care about, making sure I don't miss anything critical. It's like having a personal assistant for all my channels!"/>
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-2.svg" width={327} height={141} alt="In the finance world, missing a key update can be costly. Gruntly ensures I'm always in the loop without being overwhelmed. I've spotted several opportunities just from the digests it sends!"/>
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-3.svg" width={315} height={184} alt="I create content across niches, and Gruntly helps me stay updated on all of them. It filters out the noise, letting me focus on what truly matters for my audience. My research time has been cut in half!"/>
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-4.svg" width={340} height={184} alt="As a gaming enthusiast, I love being updated but hated the clutter. With Gruntly, I get updates about the games and communities I care about. It's like a newsfeed tailored just for me."/>
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-5.svg" width={329} height={163} alt="Running a company requires informed decisions. With Gruntly, I get the relevant news from my industry without wading through endless messages. It's streamlined, efficient, and an absolute game-changer for executives."/>
        </div>
        <div className={styles["testimonial"]}>
          <img src="/img/message-6.svg" width={310} height={184} alt="Juggling multiple clients means I need to stay on top of various industries. Gruntly does the heavy lifting, giving me curated updates so I can serve my clients better. It's my secret weapon to staying informed!"/>
        </div>
      </div>
    </section>
  )
}
