import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate'

type FeatureItem = {
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    img: require('@site/static/img/homepage/display_01.jpg').default,
    /*Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,*/
  },
  {
    img: require('@site/static/img/homepage/display_02.jpg').default,
    /*Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,*/
  },
  {
    img: require('@site/static/img/homepage/display_03.jpg').default,
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
        <h2>
          <Translate
            id="homepage.whatCanYouDoHere.title"
            description="The homepage 'what can you do here' title">
            您可以在这里做些什么？
          </Translate>
        </h2>
        <p>
          <Translate
            id="homepage.whatCanYouDoHere.description"
            description="The homepage 'what can you do here' description">
            获取每周最新基岩版开发技术资讯，了解基岩版开发前沿技术
          </Translate>
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
