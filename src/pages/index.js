import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container red">

        <img className="logo" src={require('@site/static/img/logo.png').default}></img>
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 style={{color: '#263238'}}>Control your money. Control your data.</h1>
        <p>Free, open-source, offline-first budgeting. Zero-based envelope budgeting done right -- with no strings attached. </p>

        <div >
          <img src={require('@site/static/img/screenshot_transactions.png').default} alt="Screenshot" class="screenshot-main" />
        </div>

        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://app.budgetzero.io">
            Start Budgeting
          </Link>

        </div>
        <div className="downloadDiv">
        <a href="https://github.com/budgetzero/budgetzero/releases/latest">Download for Desktop</a> <span>or </span>
		    <a href="https://github.com/budgetzero/budgetzero#deployment">Self Host</a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`budgetzero`}
      description="Free, open-source, offline-first budgeting. Zero-based envelope budgeting done right -- with no strings attached. ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
