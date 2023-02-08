// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '基岩技术周刊',
  tagline: 'Minecraft基岩版技术周刊文档站点',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: ' https://abbottmc.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AbbottMc', // Usually your GitHub org/user name.
  projectName: 'BedrockTechWeekly', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en'
      }
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AbbottMc/BedrockTechWeekly/tree/master',
        },
        blog: {
          blogSidebarTitle: '历史周刊文章',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AbbottMc/BedrockTechWeekly/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '基岩技术周刊',
        logo: {
          alt: '基岩技术周刊Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: '周刊', position: 'left'},
          {
            type: 'doc',
            docId: 'official_changelog/intro',
            position: 'left',
            label: '官方日志',
          },
          {
            type: 'doc',
            docId: 'changelog',
            position: 'right',
            label: '站点日志',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/facebook/docusaurus/issues/3526',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            href: 'https://github.com/AbbottMc/BedrockTechWeekly',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '周刊',
            items: [
              {
                label: '主页',
                to: '/',
              },
            ],
          },
          /*{
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          {
            title: '更多',
            items: [
              {
                label: '周刊',
                to: '/blog',
              },
              {
                label: 'GitHub仓库',
                href: 'https://github.com/AbbottMc/BedrockTechWeekly',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bedrock Tech Weekly, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
