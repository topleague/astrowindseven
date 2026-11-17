---
title: "Should you noindex archives in WordPress?"
excerpt: "Tag, author and date archives rarely deserve a place in Google. Here is which WordPress archives to noindex, which to keep, and how to do it safely."
publishDate: 2014-08-11T00:00:00+05:30
updateDate: 2026-11-17T00:00:00+05:30
category: "SEO"
author: "Top League Technologies"
tags:
  - noindex
  - wordpress
  - technical seo
metadata:
  title: "Should You Noindex Archives in WordPress?"
  description: "Tag, author and date archives rarely deserve a place in Google. Here is which WordPress archives to noindex, which to keep, and how to do it safely."
---

Every time you publish a post, WordPress quietly creates or updates several other pages: a page for each category, one for each tag, one for the author, and one for each month and year. These archive pages list excerpts of your posts. Left alone, search engines may crawl and index all of them.

Whether that is a problem depends on the archive and on your site. In 2014 we gave a blunt answer: noindex them all. The honest answer today is more selective.

## What the archives are

For a post called "How to create a website" in the category "WordPress", tagged "website" and written by one author, WordPress can generate:

- a category archive, such as `/category/wordpress/`
- a tag archive, such as `/tag/website/`
- an author archive, such as `/author/name/`
- date archives, such as `/2026/11/`

Each is a list page built from content that already exists on your post pages.

## Why unmanaged archives can hurt

**They compete with your posts.** A category page that repeats the opening of fifty posts can match the same searches as the posts themselves. When an archive outranks the post it lists, visitors land on a list of excerpts instead of the answer.

**They are thin and repetitive.** A tag used on two posts produces a page with almost no original content, made of excerpts you have already published elsewhere. Search engines are good at treating such pages as low value, and a site with hundreds of them wastes crawl attention on pages nobody needs.

**They convert poorly.** Someone arriving on a tag page sees fragments of several unrelated posts and no clear next step. They tend to leave. A post page, or a deliberately built landing page, does the job better.

Note that we have dropped an older argument from the original post about click-through rate and "PageRank" decay. We cannot support it, and you do not need it. The case rests on duplication, thinness and wasted attention.

## Which archives to noindex

A sensible default for most small business blogs:

- **Tag archives: noindex.** They are usually the thinnest and most numerous.
- **Date archives: noindex.** No visitor searches for "posts from March 2019".
- **Author archives on a single-author site: noindex.** They duplicate the blog page. On a site with several real authors with bios, an author page can be worth indexing.
- **Category archives: keep them indexable only if you have made them useful.** A category with a written introduction, a sensible order and a clear purpose can rank for a topic and serve as a hub. A category that is just a stack of excerpts should be noindexed or restructured. Give every post a unique, hand-written excerpt too, so that whatever archive pages remain are not made of copied text.
- **Search result pages: noindex.** Most SEO plugins do this by default.

If you rely on WooCommerce, product categories and tags behave differently. A product category is often a page you do want to rank, so review those separately.

## How to do it

You do not need code. The major SEO plugins, including Yoast SEO, Rank Math and SEOPress, have settings for content types and taxonomies where you can switch each archive type to noindex. Many modern installs already ship with sensible defaults, so check what is set before changing anything. Some tag and date settings differ between plugins and between versions, so confirm the result on a live page.

To check, open an archive URL, view the page source and look for a robots meta tag containing `noindex`. Google Search Console's URL Inspection tool also reports whether a page is indexable.

## Mistakes to avoid

**Do not block archives in robots.txt as a substitute.** If a URL is disallowed, Google cannot fetch it and so never sees the noindex tag. Pages that are already indexed can stay in results. Use noindex first, wait for the pages to drop out, and only then consider whether crawl blocking is needed at all.

**Do not confuse noindex with the "Discourage search engines" checkbox** under Settings, Reading in WordPress. That setting applies to the whole site. People sometimes switch it on during development and forget it.

**Keep links crawlable.** A noindex page with "follow" links still lets search engines discover your posts through it. Plugins normally set this correctly, so do not change it without a reason.

**Do not noindex pages that earn real traffic.** Before switching off a whole archive type, check in Search Console's performance report whether those URLs bring any clicks. If an archive does, fix or enrich it rather than hiding it.

**Do not use noindex to hide sensitive content.** It is a request to search engines, not access control.

## A quick audit routine

1. In Search Console, open the pages report and the performance report filtered by `/tag/`, `/category/`, `/author/` and date patterns.
2. Note how many are indexed and how many get clicks.
3. Set the archives you decided against to noindex in your SEO plugin.
4. Re-check after a few weeks. Indexed counts should fall and your post pages should be unaffected.

A tidy index is a small gain on its own, but it keeps the pages you actually want found at the front. It is one part of the technical clean-up in our [SEO services](/seo-services/). If you want someone to review your archive setup, [contact us](/contact/). For the wider picture of what search engines should see on your site, see [how to get your website onto Google's first page](/how-to-get-your-website-listed-on-googles-first-page/).
