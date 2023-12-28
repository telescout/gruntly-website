import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import styles from './index.module.scss';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../Testimonials';
import FAQSupport from '../components/FAQSupport';
import Support from '../components/Support';
import Footer from '../components/Footer';

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Efficiently Manage Telegram Content with Gruntly - Discover Gruntly, the ultimate Telegram personal assistant. Tailored daily digests, easy setup, and precise content filtering based on your preferences. Stay informed without the clutter!">
      <Hero />
      <HowItWorks />
      <Testimonials />
      <FAQSupport />
      <Support />
      <Footer />
    </Layout>
  )
}
