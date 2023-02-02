import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    img: require('@site/static/img/homepage/display_01.png').default,
    /*Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,*/
  },
  {
    img: require('@site/static/img/homepage/display_02.png').default,
    /*Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,*/
  },
  {
    img: require('@site/static/img/homepage/display_03.png').default,
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,*/
  },
];

function Feature({img}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} role="img" alt={''}/>
      </div>
      {/*<div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>*/}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 style={{textAlign: 'center'}}>您可以在这里做些什么？</h2>
        <p style={{textAlign: 'center'}}>获取每周最新基岩版开发技术资讯，了解基岩版开发前沿技术</p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
