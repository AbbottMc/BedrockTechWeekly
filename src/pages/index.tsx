import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate'

function HomepageHeader() {
  return (
    <header className="hero section-lighter no-underline-links px-4 pt-16 lg:py-0 heroBanner">
      <div className="container text--center"
           style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
        {/*<div className="buttons">*/}
        {/*  <Link*/}
        {/*    className="hero--primary button button--lg"*/}
        {/*    style={{color: 'white', border: 0}}*/}
        {/*    to="/blog/latest">*/}
        {/*    <Translate*/}
        {/*      id="homepage.checkLatestArticle"*/}
        {/*      description="The homepage check latest article button message">*/}
        {/*      本周周刊 📖*/}
        {/*    </Translate>*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <div className="header-button-container">
          <Link
            // className="homepage-button-secondary hero--primary  button--lg"
            className="button button--primary button--lg"
            to="/docs/official_changelog/preview/1.19.80.21">
            <Translate
              id="homepage.checkTechChangelog"
              description="The homepage check tech changelog button message">
              本周更新日志 📜
            </Translate>
          </Link>
          <Link
            // className="homepage-button-secondary hero--primary  button--lg"
            className="button button--outline button--secondary button--lg"
            to="/docs/sapi/stable" style={{marginLeft: 24}}>
            <Translate
              id="homepage.scriptAPIRef"
              description="The homepage check tech changelog button message">
              脚本API参考 🔌
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
      <main className={'section-darker text--center'}>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
