import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.scss';
import TargetAudience from '../components/TargetAudience';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Pricing from '../components/Pricing';
import FAQSupport from '../components/FAQSupport';
import CTAButton from '../components/CTAButton';

type ImageProps = {
  description: string,
  src: string,
};

const ImageComponent: React.FC<ImageProps> = ({ description, src }) => (
  <div className="image-container">
    <img src={src} alt={description} />
    <p>{description}</p>
  </div>
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section>
      <h2>About Gruntly</h2>

      <h3>Navigating the Digital Deluge: Why Gruntly?</h3>
      <p>
        In today's hyper-connected world, information flows freely, and while that's mostly a boon, it can often be a bane for professionals and enthusiasts alike. Wading through a deluge of updates, messages, and notifications can be time-consuming and mentally taxing. Enter Gruntly — your dedicated digital curator, ensuring you never miss out on what truly matters to you.
      </p>

      <h3>Personalized Curations, Tailored for You</h3>
      <p>
        At the heart of Gruntly is a sophisticated algorithm designed to understand your unique interests and current tasks. Whether you're a tech entrepreneur, a digital artist, a finance analyst, or just someone with a keen interest in a specific domain, Gruntly crafts a custom digest from a multitude of channels. No more sifting through unrelated content; get only what resonates with you.
      </p>

      <h3>One Assistant, Multiple Functions</h3>
      <ul>
        <li><strong>Effortless Onboarding:</strong> A user-friendly dialogue-driven interface walks you through Gruntly's capabilities, ensuring your interests are captured right from the start.</li>
        <li><strong>Seamless Monitoring:</strong> Simply forward a message from any channel of interest, and let Gruntly take over. No manual entries, no hassles.</li>
        <li><strong>Dynamic Customizations:</strong> Your interests evolve, and so does Gruntly. Adjust your preferences, add or remove channels, and ensure your digests always align with your current needs.</li>
        <li><strong>Transparent Insights:</strong> Stay informed about Gruntly's operations. View comprehensive statistics, understand the channels analyzed, and even see the number of messages discarded as irrelevant.</li>
      </ul>

      <h3>Empowerment Beyond Content</h3>
      <p>
        We believe that knowledge is power. But in a world where knowledge is abundant, the real power lies in discernment. Gruntly doesn't just provide you with content; it offers clarity. It empowers you to make informed decisions, fosters continuous learning, and ensures you're always at the top of your game.
      </p>

      <h3>Join the Future of Content Consumption</h3>
      <p>
        In an age where every minute counts, let Gruntly be your trusted ally, ensuring you spend your time where it truly matters. Dive deep into your interests, unfettered by information overload. With Gruntly, embrace a future where content works for you, not the other way around.
      </p>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>3. How It Works</h2>

      <div>
        <h3>Step 1: Personalized Onboarding</h3>
        <p>
          Begin your journey with Gruntly in an interactive dialogue. Here, you'll introduce us to your unique interests and preferences.
          Think of it as setting the stage for Gruntly to truly understand what you're looking for in the vast sea of information.
        </p>
        <ImageComponent description="An illustrative representation of a user engaging in a friendly chat with Gruntly, with various interest icons floating around." src="/path/to/image1.jpg" />
      </div>

      <div>
        <h3>Step 2: Channel Monitoring Made Easy</h3>
        <p>
          Got a channel you're keen on? Simply forward any message from that channel to Gruntly. It's your way of telling us, "Hey, I find this interesting!"
          From there, we'll keep an eye on it, scanning and analyzing content as it rolls in.
        </p>
        <ImageComponent description="A collage showing different message icons being directed towards the Gruntly logo." src="/path/to/image2.jpg" />
      </div>

      <div>
        <h3>Step 3: Intelligent Analysis & Curation</h3>
        <p>
          Our advanced algorithms get to work, sifting through the plethora of messages. Gruntly distinguishes between what's relevant to you and what's not, ensuring only the gems make it through.
          It's like having a personal librarian who knows precisely which book you'd love next.
        </p>
        <ImageComponent description="Gears and neural networks intertwined with Gruntly at the center, representing its analytical prowess." src="/path/to/image3.jpg" />
      </div>

      <div>
        <h3>Step 4: Receive Your Tailored Digest</h3>
        <p>
          At your chosen frequency, Gruntly will send you a digest of all the significant messages, neatly organized by interest category.
          It's concise, relevant, and designed to give you maximum insight in minimum time. Say goodbye to endless scrolling and hello to targeted reading!
        </p>
        <ImageComponent description="A visual representation of the Gruntly digest, with highlighted snippets of messages and statistical insights." src="/path/to/image4.jpg" />
      </div>

      <div>
        <h3>Step 5: Flexibility at Your Fingertips</h3>
        <p>
          Interests change, and Gruntly gets that. Easily edit your preferences, add or remove channels, and tweak your digest frequency whenever you wish.
          It's all about giving you control over the information you consume.
        </p>
        <ImageComponent description="A user interface dashboard showing customizable settings and toggles, emphasizing user control." src="/path/to/image5.jpg" />
      </div>

      <div className="cta-container">
        <p>Remember: Gruntly is more than just an assistant; it's a commitment to making sure you're always in the know, without the overwhelm. Ready to navigate the noise with ease?</p>
        <CTAButton telegramHandle="GruntlyBot" label="Join Gruntly on Telegram!" />
      </div>

    </section>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Gruntly - Your Personal Information Curator"
      description="Navigate the noise with Gruntly's tailored content curation."
    >
      <header>
        <h1>Navigate the Noise with Ease</h1>
        <p>Gruntly curates content from diverse channels tailored just for you. No more information overload</p>
      </header>

      <About />

      <HowItWorks />

      <TargetAudience />

      <TestimonialCarousel />

      <Pricing />

      <FAQSupport />

    </Layout>
  );
}
