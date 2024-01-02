// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gruntly',
  tagline: 'Cutting through the chatter for you',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gruntly.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'telescout', // Usually your GitHub org/user name.
  projectName: 'gruntly-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-LFRYDEQZT5',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],
  headTags: [{
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap',
      },
    }, {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    }, {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true'
      },
  },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Gruntly',
        logo: {
          alt: 'Gruntly',
          src: 'img/logo.svg',
          width: 40,
          height: 40
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
        //   {
        //     href: 'https://github.com/facebook/docusaurus',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        {
          to: 'https://t.me/GruntlyBot',
          label: 'Get Started',  // The text that appears on your button
          position: 'right',  // You can also use 'left' if needed
          className: 'cta-nav'  // Optional: if you want to style the button
        },
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       html: `Gruntly - Cutting through the chatter for you.`
      //     },
      //     {
      //       label: 'Terms',
      //       to: '/terms-of-service',
      //     },
      //     {
      //       label: 'Privacy',
      //       to: '/privacy',
      //     },
      //   ],
      //   copyright: `© ${new Date().getFullYear()} Gruntly`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
