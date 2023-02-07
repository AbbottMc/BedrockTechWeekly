import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate
            id="homepage.title"
            description="The homepage title">
            {siteConfig.title}
          </Translate>
        </h1>
        {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
        <p>
          <Translate
            id="homepage.subtitle"
            description="The homepage subtitle">
            本站旨在每周提供Minecraft基岩版技术领域相关内容，让您更方便、快捷的了解基岩版开发领域的实时动态。
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/latest">
            <Translate
              id="homepage.checkLatestArticle"
              description="The homepage check latest article button message">
              查看本周周刊 📖
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
