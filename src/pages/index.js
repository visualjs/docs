import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Grid from '../components/Grid';
import Logo from '@site/static/img/logo.svg';

function Share() {
  return (
    <div className={styles.share}>
      <div>
        <a href="https://www.npmjs.com/package/@visualjs/grid" title="version">
          <img src="https://img.shields.io/npm/v/@visualjs/grid/latest.svg?style=for-the-badge&color=%23354d98" />
        </a>
        <a href="https://www.npmjs.com/package/@visualjs/grid" title="version">
          <img src="https://img.shields.io/npm/v/@visualjs/grid/next.svg?style=for-the-badge&color=%23354d98" />
        </a>
      </div>
      <div>
        <a href="https://github.com/visualjs/grid/issues" title="issues">
          <img src="https://img.shields.io/github/issues/visualjs/grid?style=for-the-badge&color=%23354d98" />
        </a>
        <a href="https://github.com/visualjs/grid" title="stars">
          <img src="https://img.shields.io/github/stars/visualjs/grid?style=for-the-badge&color=%23354d98" />
        </a>
        <a href="https://github.com/visualjs/grid" title="forks">
          <img src="https://img.shields.io/github/forks/visualjs/grid?style=for-the-badge&color=%23354d98" />
        </a>
        <a href="./LICENSE" title="license">
          <img src="https://img.shields.io/github/license/visualjs/grid?style=for-the-badge&color=%23354d98" />
        </a>
      </div>
    </div>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.header)}>
        <Logo className={styles.headerLogo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Share />
        <Link className="button button--lg button--primary margin-top--lg" to="/docs">GETTING STARTED</Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Grid />
      </main>
    </Layout>
  );
}
