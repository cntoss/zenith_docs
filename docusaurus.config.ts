import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ZenithFlow ERP',
  tagline: 'Docs for Backend (Laravel), Mobile (Flutter), and Accounting Webview',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zenithflow', // Usually your GitHub org/user name.
  projectName: 'erp-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ZenithFlow ERP',
      logo: {
        alt: 'ZenithFlow ERP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Changelogs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {href: 'https://erp.pioneerassociate1234.com.np/', label: 'Production ERP', position: 'right'},
        {href: 'https://ams.gajurelsarad.com.np/', label: 'Accounting Web', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Systems',
          items: [
            {label: 'Production ERP', href: 'https://erp.pioneerassociate1234.com.np/'},
            {label: 'Accounting Web', href: 'https://ams.gajurelsarad.com.np/'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Email: info@cosys.com.np', href: 'mailto:info@cosys.com.np'},
            {label: 'Phone: 00977-01-5010070', href: 'tel:+97715010070'},
            {label: 'Phone: 00977-01-5010077', href: 'tel:+97715010077'},
            {label: 'Phone: 00977-01-5010300', href: 'tel:+97715010300'},
            {label: 'Phone: 00977-01-5010310', href: 'tel:+97715010310'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZenithFlow. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
