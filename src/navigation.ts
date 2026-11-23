
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about-us/'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Article Writing',
          href: getPermalink('/seo-article-writing/'),
        },
        {
          text: 'SEO Copywriting',
          href: getPermalink('/seo-copywriting/'),
        },
        {
          text: 'Product Description Writing',
          href: getPermalink('/product-description-writing/'),
        },
        {
          text: 'Website Development',
          href: getPermalink('/website-development/'),
        },
        {
          text: 'SEO Services',
          href: getPermalink('/seo-services/'),
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
          text: 'Content Marketing',
          href: getPermalink('content-marketing', 'category'),
        },
        {
          text: 'Content Writing',
          href: getPermalink('content-writing', 'category'),
        },
        {
          text: 'Copywriting',
          href: getPermalink('copywriting', 'category'),
        },
        {
          text: 'SEO',
          href: getPermalink('seo', 'category'),
        },
        {
          text: 'Website Development',
          href: getPermalink('website', 'category'),
        },
        {
          text: 'WordPress Development',
          href: getPermalink('wordpress', 'category'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact/'),
    },
  ],
};

export const footerData = {
  links: [
    { text: 'Chat on WhatsApp', href: '/whatsapp/' },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

  socialLinks: [
  { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: '/whatsapp/' },
  ],

  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://arthelokyo.com">Arthelokyo</a> · All rights reserved. <a href="/terms/">Terms of Service</a> · <a href="/privacy/">Privacy Policy</a>.
  `,
};
