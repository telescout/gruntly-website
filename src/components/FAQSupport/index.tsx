import styles from './styles.module.scss';
import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: JSX.Element;
};

const faqs: FAQItem[] = [
  {
    question: 'What is Gruntly?',
    answer: <p>Gruntly is a personal assistant bot designed to monitor and analyze messages from various public sources, ensuring you only receive content tailored to your interests.<br/><br/>Say goodbye to information overload and never miss out on important updates or news.</p>
  },
  {
    question: 'How do I set up Gruntly?',
    answer: <p>It's simple! After you initiate Gruntly, the bot will guide you through an onboarding process. You'll provide your interests, and from there, you can start forwarding messages from your channels of interest to Gruntly for monitoring.</p>
  },
  {
    question: "How does Gruntly determine what's relevant to me?",
    answer: <p>Gruntly uses advanced algorithms to analyze the content based on the interests you've provided. Over time, Gruntly will refine its selections as it learns more about your preferences, ensuring even better content curation.</p>
  },
  {
    question: "Can I modify my interests or channels?",
    answer: <p>Absolutely! You can edit your interests or remove/add channels for monitoring anytime via the settings.</p>
  },
  {
    question: "What platforms does Gruntly currently support?",
    answer: <p>As of now, Gruntly is integrated with Telegram. We're actively working on expanding to other platforms. Stay tuned for updates!</p>
  },
  {
    question: "Is my data secure with Gruntly?",
    answer: <p>Your privacy and security are our top priorities. Gruntly uses end-to-end encryption and follows strict data protection guidelines. We never sell or share your data with third parties.</p>
  },
  {
    question: "How do I choose a subscription plan?",
    answer: <p>Gruntly offers various subscription plans tailored to different user needs. Navigate to the 'Pricing & Subscription' section to review the details and select the plan that's best for you.</p>
  },
  {
    question: "I'm facing issues with my current subscription. Who do I contact?",
    answer: <p>We're here to help! Please reach out to our support team at <a href="mailto:support@gruntly.co">support@gruntly.co</a> or via the <a href='https://t.me/gruntly_support_bot'>@gruntly_support_bot</a>.</p>
  },
  {
    question: "How often will I receive digests from Gruntly?",
    answer: <p>You can customize the frequency of your digests. Whether you want daily, weekly, or real-time notifications, Gruntly can be adjusted to fit your preference.</p>
  },
  {
    question: "I received content that's not relevant. What do I do?",
    answer: <p>Gruntly is designed to learn continuously. If something isn't quite right, you can provide feedback directly through the bot, helping it refine its content curation for you.</p>
  },
  {
    question: "Can I refer Gruntly to a friend?",
    answer: <p>Absolutely, and thank you for spreading the word! We're working on a referral program. In the meantime, just share our website link with anyone interested.</p>
  },
  {
    question: "Do you offer enterprise solutions or bulk subscriptions?",
    answer: <p>Yes, we cater to businesses and offer enterprise-level solutions. Please contact our sales team at <a href="mailto:sales@gruntly.co">sales@gruntly.co</a> for more details.</p>
  }
];


const FAQSupport: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={styles["faqSupport"]}>
      <h2>FAQ</h2>

      {
        faqs.map((faq, index) => (
          <div key={index} className={activeIndex === index ? styles["active"] : ""}>
            <button onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
              {faq.question}
            </button>
            {activeIndex === index && <div className={styles["answer"]}>{faq.answer}</div>}
          </div>
        ))
      }
    </section>
  );
};

export default FAQSupport;
