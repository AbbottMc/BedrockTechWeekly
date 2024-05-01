// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const minecraftTypeNames = [
  'common',
  'server',
  'server-ui',
  'server-admin',
  'server-net',
  'server-editor',
  'server-gametest',
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '基岩技术文刊 | Bedrock Tech Journal',
  tagline: 'Minecraft基岩版技术文刊站点',
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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans',
      'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en'
      }
    }
  },
  plugins: [
    ...minecraftTypeNames.map((typeName)=>{
      return [
        'docusaurus-plugin-typedoc',
        // Plugin / TypeDoc options
        {
          id: `preview-${typeName}`,
          entryPoints: [`./static/typedoc/preview/${typeName}.d.ts`],
          tsconfig: './static/typedoc/preview/tsconfig.json',
          out: `sapi/preview/${typeName}`,
          sidebar: {
            categoryLabel: 'sapiPreviewSidebar',
            collapsed: false,
            position: 0,
            fullNames: true,
          }
        }
      ];
    }),
    ...minecraftTypeNames.map((typeName)=>{
      return [
        'docusaurus-plugin-typedoc',
        // Plugin / TypeDoc options
        {
          id: `stable-${typeName}`,
          entryPoints: [`./static/typedoc/stable/${typeName}.d.ts`],
          tsconfig: './static/typedoc/stable/tsconfig.json',
          out: `sapi/stable/${typeName}`,
          sidebar: {
            categoryLabel: 'sapiStableSidebar',
            collapsed: false,
            position: 0,
            fullNames: true,
          }
        }
      ];
    })
  ],
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
          admonitions: {
            keywords: ['info', 'warn'],
            // extendDefaults: true,
          },
          // remarkPlugins: [
          //   require('./src/remark/SourceTextOverlay')
          // ]
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
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api_reference.css'),
            require.resolve('./src/css/sapi_docs.css'),
            require.resolve('./src/css/article.css'),
            require.resolve('primeflex/primeflex.min.css'),
            require.resolve('primeicons/primeicons.css')
          ]
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark'
      },
      announcementBar: {
        id: 'welcome',
        content:
          '欢迎来到基岩技术文刊站！这个站点仍在完善当中，欢迎您的<a href="https://github.com/AbbottMc/BedrockTechWeekly/issues">反馈</a>！',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      /* docs:{
         sidebar: {
           hideable: true,
         }
       },*/
      navbar: {
        title: '基岩技术文刊',
        logo: {
          alt: '基岩技术文刊Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   to: '/blog',
          //   label: '周刊',
          //   position: 'left'
          // },
          {
            type: 'doc',
            docId: 'official_changelog/README',
            position: 'left',
            label: '官方日志',
          },
          {
            type: 'dropdown',
            label: '脚本文档',
            position: 'left',
            items: [
              {
                to: '/docs/sapi/stable',
                label: '稳定版 [1.20.80]',
              },
              {
                to: '/docs/sapi/preview',
                label: '预览版 [1.21.0.23]',
              }
            ]
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
            /*dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/facebook/docusaurus/issues/3526',
                label: 'Help Us Translate',
              },
            ],*/
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
            title: '文刊',
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
        copyright: `基岩技术文刊站点，由<a href="https://space.bilibili.com/15122547">乾山瑶</a>基于Docusaurus搭建.<br/>“Minecraft”是 <a href="https://www.minecraft.net/">Mojang AB</a> 的商标，在中国大陆由<a href="https://mc.163.com/">网易我的世界</a>代理管辖。本站不以任何方式隶属于 Microsoft 、 Mojang AB 或网之易吾世界公司`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
