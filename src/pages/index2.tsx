import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import styles from './index2.module.scss';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
