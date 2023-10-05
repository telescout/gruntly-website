// TestimonialCarousel.tsx

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type Testimonial = {
  name: string;
  title: string;
  text: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Maria",
    title: "Tech Entrepreneur",
    text: "With multiple startups under my wing, staying updated became a chore. Gruntly curates all the news I care about, making sure I don't miss anything critical. It's like having a personal assistant for all my channels!",
    imageSrc: "/img/maria.jpg"
  },
  {
    name: "Alex",
    title: "Financial Analyst",
    text: "In the finance world, missing a key update can be costly. Gruntly ensures I'm always in the loop without being overwhelmed. I've spotted several opportunities just from the digests it sends!",
    imageSrc: "/img/alex.jpg"
  },
  {
    name: "Hannah",
    title: "Content Creator",
    text: "I create content across niches, and Gruntly helps me stay updated on all of them. It filters out the noise, letting me focus on what truly matters for my audience. My research time has been cut in half!",
    imageSrc: "/img/hannah.jpg"
  },
  {
    name: "Raj",
    title: "Gaming Enthusiast",
    text: "As a gaming enthusiast, I love being updated but hated the clutter. With Gruntly, I get updates about the games and communities I care about. It's like a newsfeed tailored just for me.",
    imageSrc: "/img/raj.jpg"
  },
  {
    name: "Isabel",
    title: "CEO",
    text: "Running a company requires informed decisions. With Gruntly, I get the relevant news from my industry without wading through endless messages. It's streamlined, efficient, and an absolute game-changer for executives.",
    imageSrc: "/img/isabel.jpg"
  },
  {
    name: "Liam",
    title: "Freelance Web Developer",
    text: "Juggling multiple clients means I need to stay on top of various industries. Gruntly does the heavy lifting, giving me curated updates so I can serve my clients better. It's my secret weapon to staying informed!",
    imageSrc: "/img/liam.jpg"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation by timeout (e.g., 5 seconds)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(1); // Move to the next set of testimonials after 5 seconds
    }, 5000);
    return () => clearTimeout(timeoutId); // Clear timeout when component unmounts
  }, [currentIndex]);

  const navigate = (offset: number) => {
    let newIndex = currentIndex + offset;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1; // Adjusted for single item
    } else if (newIndex > testimonials.length - 3) { // Displaying three items but adjusted for single item
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };
  const totalDots = Math.ceil(testimonials.length / 2);

  return (
    <section className={styles["testimonial-carousel"]}>
      <div className={styles["items-wrapper"]}>
      <div className={styles["testimonial-carousel-items"]}>
      {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
        <div key={index} className={styles["testimonial"]}>
          <img src={testimonial.imageSrc} alt={testimonial.name} />
          <h3>{testimonial.name}, {testimonial.title}</h3>
          <p>"{testimonial.text}"</p>
        </div>
      ))}
      </div>
      </div>
      <div className={styles["dots"]}>
        {Array.from({ length: totalDots }).map((_, idx) => (
          <span 
            key={idx} 
            className={`${styles["dot"]} ${currentIndex / 3 === idx ? styles["active"] : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
