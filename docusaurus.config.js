// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación Chat Buho',
  tagline: 'Guia oficial completa y definitiva de Chat Buho',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documentacion.chat.buho.la',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentacion/',

  // GitHub pages deployment config.
  organizationName: 'chatbuho',
  projectName: 'documentacion',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        // blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    'plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Documentación de Chat Buho',
          src: 'data:image/png;base64,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',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
      imageZoom: {
        selector: '.markdown img',
      },
    }),
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
    ],
};

module.exports = config;
