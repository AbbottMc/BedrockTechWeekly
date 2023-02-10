import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate'

function HomepageHeader() {
  return (
    <header className="hero noise-bg no-underline-links px-4 pt-16 lg:py-0 heroBanner">
      <div className="container">
        <h1 className="hero__title">
          <Translate
            id="homepage.title"
            description="The homepage title">
            基岩技术周刊
          </Translate>
        </h1>
        <p>
          <Translate
            id="homepage.subtitle"
            description="The homepage subtitle">
            本站旨在每周提供Minecraft基岩版技术领域相关内容，让您更方便、快捷的了解基岩版开发领域的实时动态。
          </Translate>
        </p>
        <div className="buttons">
          <Link
            className="hero--primary button button--lg"
            style={{ color: 'white', border: 0}}
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
