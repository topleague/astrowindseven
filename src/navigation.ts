import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
        text: 'About',
        href: getPermalink('/who/'),
      },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
  {
     text: 'Services',
      links: [
        {
          text: 'Article Writing',
          href: getPermalink('/arty/'),
        },
        {
          text: 'SEO Copywriting',
          href: getPermalink('/mike/'),
        },
        {
          text: 'Product Description Writing',
          href: getPermalink('/hiya/'),
        },
	  {
          text: 'SEO Services',
          href: getPermalink('/homy/'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
   {
        text: 'Contact',
        href: getPermalink('/contact/'),
      },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Demos',
      links: [
        { text: 'SaaS', href: getPermalink('/homes/saas') },
        { text: 'Startup', href: getPermalink('/homes/startup') },
        { text: 'Mobile App', href: getPermalink('/homes/mobile-app') },
        { text: 'Personal', href: getPermalink('/homes/personal') },
        { text: 'Landing pages', href: getPermalink('/landing/lead-generation') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: 'https://github.com/arthelokyo/astrowind#readme' },
        { text: 'Skills for AI agents', href: 'https://github.com/arthelokyo/astrowind/tree/main/.agents/skills' },
        { text: 'Releases', href: 'https://github.com/arthelokyo/astrowind/releases' },
        { text: 'Discussions', href: 'https://github.com/arthelokyo/astrowind/discussions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Report an issue', href: 'https://github.com/arthelokyo/astrowind/issues' },
        { text: 'License', href: 'https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://arthelokyo.com"> Arthelokyo</a> · All rights reserved.
  `,
};
