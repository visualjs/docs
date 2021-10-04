import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function Share() {
  return (
    <>
      <a href="https://www.npmjs.com/package/visual-grid" title="version">
        <img src="https://img.shields.io/npm/v/visual-grid.svg?style=for-the-badge&color=%230e83cd" />
      </a>
      <a href="https://github.com/visualjs/grid/issues" title="issues">
        <img src="https://img.shields.io/github/issues/visualjs/grid?style=for-the-badge&color=%230e83cd" />
      </a>
      <a href="https://github.com/visualjs/grid" title="stars">
        <img src="https://img.shields.io/github/stars/visualjs/grid?style=for-the-badge&color=%230e83cd" />
      </a>
      <a href="https://github.com/visualjs/grid" title="forks">
        <img src="https://img.shields.io/github/forks/visualjs/grid?style=for-the-badge&color=%230e83cd" />
      </a>
      <a href="./LICENSE" title="license">
        <img src="https://img.shields.io/github/license/visualjs/grid?style=for-the-badge&color=%230e83cd" />
      </a>
    </>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.share}>
          <Share />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.buttons}>
          <Link className="button" to="/docs">开始使用</Link>
        </div>
      </main>
    </Layout>
  );
}
