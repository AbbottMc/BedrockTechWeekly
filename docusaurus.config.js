// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '基岩技术周刊 | Bedrock Tech Weekly',
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
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'preview-server',
        entryPoints: ['./static/typedoc/preview/server.d.ts'],
        tsconfig: './static/typedoc/preview/tsconfig.json',
        out: 'sapi/preview/server',
        sidebar: {
          categoryLabel: 'sapiPreviewSidebar',
          collapsed: false,
          position: 0,
          fullNames: true,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'preview-server-admin',
        entryPoints: [
          './static/typedoc/preview/server-admin.d.ts'
        ],
        tsconfig: './static/typedoc/preview/tsconfig.json',
        out: 'sapi/preview/server-admin'
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'preview-server-ui',
        entryPoints: [
          './static/typedoc/preview/server-ui.d.ts'
        ],
        tsconfig: './static/typedoc/preview/tsconfig.json',
        out: 'sapi/preview/server-ui'
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'preview-server-net',
        entryPoints: [
          './static/typedoc/preview/server-net.d.ts'
        ],
        tsconfig: './static/typedoc/preview/tsconfig.json',
        out: 'sapi/preview/server-net'
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'preview-server-gametest',
        entryPoints: [
          './static/typedoc/preview/server-gametest.d.ts',
        ],
        tsconfig: './static/typedoc/preview/tsconfig.json',
        out: 'sapi/preview/server-gametest'
      },
    ],
    // -----------------------------------------------------
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'stable-server',
        entryPoints: [
          './static/typedoc/stable/server.d.ts'
        ],
        tsconfig: './static/typedoc/stable/tsconfig.json',
        out: 'sapi/stable/server',
        sidebar: {
          categoryLabel: 'sapiStableSidebar',
          collapsed: false,
          position: 0,
          fullNames: true,
        }
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'stable-server-admin',
        entryPoints: [
          './static/typedoc/stable/server-admin.d.ts'
        ],
        tsconfig: './static/typedoc/stable/tsconfig.json',
        out: 'sapi/stable/server-admin'
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'stable-server-ui',
        entryPoints: [
          './static/typedoc/stable/server-ui.d.ts'
        ],
        tsconfig: './static/typedoc/stable/tsconfig.json',
        out: 'sapi/stable/server-ui'
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'stable-server-net',
        entryPoints: [
          './static/typedoc/stable/server-net.d.ts'
        ],
        tsconfig: './static/typedoc/stable/tsconfig.json',
        out: 'sapi/stable/server-net'
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'stable-server-gametest',
        entryPoints: [
          './static/typedoc/stable/server-gametest.d.ts',
        ],
        tsconfig: './static/typedoc/stable/tsconfig.json',
        out: 'sapi/stable/server-gametest'
      }
    ],
    // --------------------------------------
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        id: 'test-tenon-server',
        entryPoints: [
          './static/typedoc/preview/tenon-server.d.ts',
        ],
        tsconfig: './static/typedoc/preview/tsconfig.json',
        out: 'sapi/preview/tenon-server'
      }
    ]
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
            require.resolve('./src/css/article.css')
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
          '欢迎来到基岩技术周刊！这个站点仍在完善当中，欢迎您的<a href="https://github.com/AbbottMc/BedrockTechWeekly/issues">反馈</a>！',
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
        title: '基岩技术周刊',
        logo: {
          alt: '基岩技术周刊Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: '周刊', position: 'left'},
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
                label: '稳定版 [1.19.70]',
              },
              {
                to: '/docs/sapi/preview',
                label: '预览版 [1.19.80.24]',
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
        copyright: `基岩技术周刊站点，由<a href="https://space.bilibili.com/15122547">乾山瑶</a>基于Docusaurus搭建.<br/>“Minecraft”是 <a href="https://www.minecraft.net/">Mojang AB</a> 的商标，在中国大陆由<a href="https://mc.163.com/">网易我的世界</a>代理管辖。本站不以任何方式隶属于 Microsoft 、 Mojang AB 或网之易吾世界公司`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
