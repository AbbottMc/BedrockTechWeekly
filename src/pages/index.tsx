import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate'

function HomepageHeader() {
  return (
    <header className="hero section-lighter no-underline-links px-4 pt-16 heroBanner">
      <div className="container text--center"
           style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 className="hero__title">
          <Translate
            id="homepage.title"
            description="The homepage title">
            基岩技术文刊
          </Translate>
        </h1>
        <p style={{fontSize: '20px'}}>
          <Translate
            id="homepage.subtitle"
            description="The homepage subtitle">
            提供Minecraft基岩版技术领域相关内容，更方便、快捷的了解基岩版开发领域的实时动态。
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
            className="header-button button button--primary button--lg"
            to="/docs/official_changelog/preview/1.21/80/25">
            <Translate
              id="homepage.checkTechChangelog"
              description="The homepage check tech changelog button message">
              本周更新日志 📜
            </Translate>
          </Link>
          <Link
            // className="homepage-button-secondary hero--primary  button--lg"
            className="header-button-secondary button button--outline button--secondary button--lg"
            to="/docs/sapi/stable">
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
