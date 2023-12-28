import styles from './styles.module.scss';
import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: JSX.Element;
};

const faqs: FAQItem[] = [
  {
    question: 'What is Gruntly?',
    answer: <p>Gruntly is a personal assistant bot designed to monitor and analyze messages from Telegram channels and groups, ensuring you only receive content tailored to your interests.<br/><br/>Say goodbye to information overload and never miss out on important updates or news.</p>
  },
  {
    question: 'How do I set up Gruntly?',
    answer: <p>It's simple! After you initiate Gruntly, the bot will guide you through an onboarding process. You'll provide your interests, and from there, you can start forwarding messages from your channels of interest to Gruntly for monitoring.</p>
  },
  {
    question: "How does Gruntly determine what's relevant to me?",
    answer: <p>Gruntly employs AI algorithms that predict and select relevant information based on the interests or tasks you specify. This ensures that the content you receive is tailored to your unique preferences.</p>
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
    question: "What are the pricing options for Gruntly?",
    answer: <p>Gruntly offers two pricing tiers:<br/><b>Free Plan:</b> Monitor one channel at no cost<br/><b>Full Plan:</b> Monitor up to 10 channels for $5 per month</p>
  },
  {
    question: "Is there a trial period for the Full Plan?",
    answer: <p>Yes, every new user gets a one-month free trial of the Full Plan.</p>
  },
  {
    question: "Are there any additional costs or hidden fees?",
    answer: <p>No, the pricing is straightforward: Free for one channel or $5 per month for up to 10 channels. There are no hidden fees.</p>
  },
  {
    question: "What happens to my data if I downgrade from Full to Free Plan?",
    answer: <p>Your data remains secure. However, you'll need to choose one channel to continue monitoring, as the Free Plan supports only one channel.</p>
  },
  {
    question: "Is my data secure with Gruntly?",
    answer: <p>Your privacy and security are our top priorities. Gruntly uses end-to-end encryption and follows strict data protection guidelines. We never sell or share your data with third parties.</p>
  },
  {
    question: "I'm facing issues with my current subscription. Who do I contact?",
    answer: <p>We're here to help! Please reach out to our support team at <a href="mailto:support@gruntly.co">support@gruntly.co</a> or via the <a href='https://t.me/gruntly_support_bot'>@gruntly_support_bot</a>.</p>
  },
  {
    question: "How often will I receive digests from Gruntly?",
    answer: <p>You will receive your digest from Gruntly daily. However, if no relevant content is found that matches your interests on a particular day, Gruntly will not send a digest.</p>
  },
  {
    question: "I received content that's not relevant. What do I do?",
    answer: <p>If the content you received isn't relevant, it may be due to unclearly defined interests. To improve accuracy, refine your interest descriptions in more detail. This will help Gruntly better understand your preferences and curate more pertinent content. For guidance on how to effectively specify your interests, please refer to our <a href='/blog/how-to-indicate-your-interests'>article</a> on this topic.</p>
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
