---
title: "How to create a custom 404 page"
excerpt: "A good 404 page helps lost visitors find what they wanted. Learn what to include, what to avoid, and how to build one in WordPress, including block themes."
publishDate: 2016-08-05T00:00:00+05:30
updateDate: 2026-11-17T00:00:00+05:30
category: "Website"
author: "Top League Technologies"
tags:
  - 404 page
  - wordpress
  - user experience
metadata:
  title: "How to Create a Custom 404 Page"
  description: "A good 404 page helps lost visitors find what they wanted. Learn what to include, what to avoid, and how to build one in WordPress, including block themes."
---

Sooner or later someone will land on a page on your site that does not exist. A link was mistyped, you renamed a page, or another site links to something you removed. The visitor sees a "404 Not Found" message, and what that page says decides whether they stay or leave.

A 404 does not harm your rankings. Google has said that missing pages are a normal part of the web, and a few of them will not count against you. The case for a good 404 page is about the visitor, not about search engines.

## Why pages go missing

- you changed a permalink or page address without a redirect
- you deleted a page or product
- someone typed or copied a URL incorrectly
- a redirect was set up wrongly
- another site links to a page that never existed

## Redirect, or show a 404?

Two habits cause problems.

**Redirecting every missing URL to the home page.** It looks tidy but confuses people. They asked for a specific thing and land on something unrelated, with no explanation. Google may also treat mass redirects of this kind as soft 404s.

**Redirecting to an unrelated page.** The same issue applies. Redirect only when the new page is a genuine replacement for the old one. If you moved a product or article, use a permanent (301) redirect to its new address. If the content is gone with no equivalent, let the page return a real 404 (or 410 for permanently removed content) and make that page helpful.

One technical point: your custom 404 page must actually return the 404 status code. A friendly page that returns a normal "200 OK" status is a soft 404 and confuses search engines. Check it in your browser's developer tools network tab or with a header checking tool.

## What a good 404 page includes

1. **A plain message** that the page was not found, in your brand's tone. A touch of humour suits some businesses, but be clear first.
2. **A possible reason**, such as "The page may have moved or been removed."
3. **A search box**, so people can look for what they wanted.
4. **Main navigation**, so the header and footer still appear.
5. **Links to useful places**: home page, your main services or product categories, popular articles, and contact details.
6. **A way to report the problem**, if you want to know about broken links from outside.

Keep it light and fast. It should not need a heavy script to load. Do not trap visitors with pop-ups.

## Finding the broken links

Fixing the cause is better than only decorating the result.

- **Google Search Console.** The Pages report lists URLs Google tried to fetch and found as "Not found (404)". Check whether any of them should exist or deserve a redirect.
- **A crawler such as Screaming Frog.** It finds broken links on your own pages, and its free version handles small sites.
- **Your analytics and server logs,** which show which missing URLs real visitors request.
- **Your link tracking tools,** to spot external sites linking to pages that no longer exist. Those links are worth redirecting.

Fix internal links first, because they are entirely in your control. Then add redirects for old URLs that still receive traffic or backlinks.

## Building the page in WordPress

**Block themes (Full Site Editing).** Open the Site Editor, go to Templates and find the 404 template, or add one if your theme lacks it. Edit it like any page with blocks: a heading, a short paragraph, a Search block, a Navigation block and a list of links or a query of recent posts. Save it and test with a nonsense URL on your site.

**Classic themes.** Themes include a `404.php` file. The safest way to change it is in a child theme so updates do not overwrite your work. Keep the standard header and footer calls and the status behaviour intact.

**Plugins.** Some plugins offer a 404 page builder or redirect management. They are convenient, but add weight and another thing to update. Choose one only if you cannot edit the template, and make sure it does not redirect everything to the home page.

**Other platforms.** Drupal, Shopify, Magento and most hosted builders have their own 404 settings. Look in the theme or site settings, or the platform's documentation.

## Test it

Visit a URL that cannot exist, for example `yoursite.com/this-page-does-not-exist`, on desktop and phone. Confirm that:

- the message and links make sense
- the search box works
- the layout is intact
- the response code is 404

Revisit it after theme changes, since updates sometimes reset the template.

A good 404 page works best on a site with sound [internal linking](/internal-linking-anchor-text/), so visitors have somewhere useful to go next.

## A small chance to help

A custom 404 page is a modest job but a visible one. It tells visitors the site is looked after. If you would like help building one as part of a site refresh, see our [website development](/website-development/) services or [get in touch](/contact/).
