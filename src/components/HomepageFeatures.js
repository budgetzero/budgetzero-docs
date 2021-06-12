import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Envelope Based Budgeting',
    img: require('@site/static/img/screenshot_import.png').default,
    description: (
      <>
        Stop playing catch-up. Direct your money where to go.
      </>
    ),
  },
  {
    title: 'Easy Import',
    img: '../../static/img/screenshot_import.png',
    description: (
      <>
        Easily import transactions from CSV, OFX or QFX.
      </>
    ),
  },
  {
    title: 'Track Your Progress',
    img: '../../static/img/screenshot_reports.png',
    description: (
      <>
        View customizable reports on your financial progress.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} className="screenshot" alt={title} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="heroText">{title}</h3>
        <p className="heroText">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
