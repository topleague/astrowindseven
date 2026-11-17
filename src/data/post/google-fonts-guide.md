---
title: "How to use custom fonts on your website"
excerpt: "How to choose web fonts, self-host Google Fonts for speed and privacy, understand premium font licences, and add fonts in WordPress block themes."
publishDate: 2015-02-12T00:00:00+05:30
updateDate: 2026-11-17T00:00:00+05:30
category: "Website"
author: "Top League Technologies"
tags:
  - web fonts
  - typography
  - performance
metadata:
  title: "How to Use Custom Fonts on Your Website"
  description: "How to choose web fonts, self-host Google Fonts for speed and privacy, understand premium font licences, and add fonts in WordPress block themes."
---

Most of what visitors read on your site is text, and a lot of them read it on a phone. The typeface you choose affects whether that text is comfortable to read, whether the site feels trustworthy, and how fast the page loads. Fonts are also one of the easiest places to make a site slower or to run into a licensing problem without noticing.

This guide covers how to choose fonts, the three practical ways to load them (Google Fonts, self-hosted files and premium fonts), and how fonts work in modern WordPress block themes.

## Choose for readability and brand

Two things matter most: readability and fit with your brand. A font that looks distinctive in a logo can be tiring in a paragraph.

- **Body text:** pick a clear, open typeface with distinct letters. Use a comfortable size (16px or more is a common starting point), generous line spacing and enough contrast against the background.
- **Headings:** you can afford more personality here, but check that they stay legible and do not take up half the screen on a phone. Scale heading sizes for small screens.
- **Limit the number of fonts.** Two families, or one family with a few weights, is enough for most sites. Every extra family and weight is another file to download.
- **Check the characters you need.** If your content uses accents, currency symbols or Indian scripts, confirm the font actually includes them. A missing character falls back to another font and looks odd.
- **Pair carefully.** A common approach is one font for headings and a neutral one for body text, or just a single family used in different weights. Font pairing tools help you preview combinations, but test on your own pages and a real phone.

To find out what font another site uses, a browser extension or your browser's developer tools (inspect an element and look at the computed font family) will tell you. Then check whether it is free or licensed before assuming you can use it.

## Always set fallback fonts

Whichever font you load, name fallbacks in your CSS, so text still displays if the file fails or has not loaded yet:

```css
body {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}
```

The browser uses the first available font in the list. Pick fallbacks of similar proportions so the page does not shift noticeably when the web font arrives. Add `font-display: swap` to your font declarations so text appears immediately in a fallback and swaps once the font loads, rather than staying invisible.

## Option 1: Google Fonts

Google Fonts is a large, free library. The fonts are released under open licences that permit commercial use, including on client sites, which makes the licensing question simple. Browse the catalogue, filter by style and language support, and use the preview to test your own text.

### The traditional way, and its drawbacks

Google gives you a link or `@import` line to paste into your site, which loads the fonts from Google's servers each time. It is quick to set up, but:

- it adds a request to another domain, which can slow rendering
- it sends your visitors' IP addresses to a third party, which some privacy regulations treat as personal data. A German court ruled against a site owner for this in 2022, and cautious businesses serving European visitors now avoid it. If you have EU or UK visitors, ask your adviser what applies to you
- it ties your page's appearance to someone else's server

### Self-hosting Google Fonts

The better practice for most business sites is to download the font files and serve them from your own domain. This gives you:

- **Privacy:** visitors' browsers do not contact Google to load your fonts.
- **Performance:** no extra domain connection, and you control caching headers.
- **Control:** you choose exactly which weights and character sets ship.

How to self-host:

1. Download the family from Google Fonts. Many third-party tools also package the web-ready files.
2. Use **WOFF2** files. The format is supported by all current browsers and is compact. You rarely need older formats now.
3. Include only the weights and styles you use, for example regular and bold. If a variable font version exists, one file can cover a range of weights.
4. Subset where you can: ship only the character sets you need, such as Latin, rather than every script.
5. Upload the files to your site and declare them:

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

6. Preload the one or two files used above the fold, so the browser fetches them early. Do not preload everything, which defeats the purpose.

## Option 2: Premium fonts

Free fonts are good, but some brands want something distinctive. Fonts can be bought from type foundries and distributors, or accessed through subscription services such as Adobe Fonts. The practical question is the licence, not the file.

**Read the licence before you pay.** Web font licences vary. Things to check:

- **Web use specifically.** A desktop licence for print or logo work often does not cover web embedding. Web use may need a separate licence.
- **Traffic limits.** Some licences are tied to monthly page views or pricing tiers. Understand what happens if your traffic grows.
- **Number of domains.** Some cover one site, some several.
- **Self-hosting vs hosted service.** Some licences allow you to host the files yourself. Others are delivered through the vendor's service and stop working if the subscription ends.
- **Who holds the licence.** If you are a business owner and a designer buys the font, make sure the licence is in your name or properly transferable. Agencies should not buy fonts for a client under their own account without saying so.
- **Modification.** Converting, subsetting or editing a font file may be restricted.

Keep the receipt and licence file somewhere safe. If you cannot afford a particular typeface, a free alternative with similar proportions often does the job, but never use a pirated copy or a "free download" from an unknown site. It can breach copyright and may carry malware.

Test a typeface using a vendor's trial files before you buy, if they offer them. Trial versions often lack some characters, so test the final licensed files too.

**Adding a premium font**, when the licence allows self-hosting, follows the same steps as self-hosted Google Fonts: get WOFF2 files, upload them, and declare them with `@font-face`. For a font served by a subscription service, you normally add a short snippet or stylesheet link they supply.

## Fonts in WordPress block themes

Block themes (Full Site Editing) changed where font handling lives.

- **Theme settings.** A block theme describes its design in a `theme.json` file, including font families and sizes. Fonts can be declared there with `fontFace` entries pointing to local font files, so no custom CSS or code is needed.
- **Site Editor.** Under Styles and Typography you choose which font applies to the whole site, headings, links, buttons and individual blocks. Changes apply visually without editing code.
- **Font Library.** Recent WordPress versions include a Font Library in the Site Editor. It lets you upload font files and install Google Fonts. The fonts you add are stored on your own site, which gives you the self-hosted setup described above without manual CSS. Check which options your version and theme support.
- **Classic themes** load fonts through the theme's stylesheet or a function that enqueues a stylesheet. The same principles apply: use local files, WOFF2 and `font-display: swap`.
- **Child themes and updates.** Keep custom fonts in a child theme or in a place that theme updates do not overwrite.

Plugins that manage fonts can help, but each adds code. Choose one only if the built-in options do not cover your case, and check it can load fonts locally rather than from Google.

## Keep fonts from slowing the site

- Use as few families and weights as you can.
- Prefer WOFF2 and subsetted files.
- Preload only critical fonts.
- Use `font-display: swap` (or `optional` for non-critical fonts).
- Test with Google PageSpeed Insights and watch layout shift, a Core Web Vitals measure. Fallback font metrics that closely match your web font reduce the jump.
- Test on a real phone over a normal connection, not only on fast broadband.

## A short checklist

1. Choose one or two families that read well at body size.
2. Confirm the licence covers web use for your site.
3. Self-host WOFF2 files with only the weights you need.
4. Set sensible fallback fonts.
5. Test on mobile, including heading sizes and line length.
6. Re-check after theme changes.

Fonts are a small part of a site, but one that reaches everything. If you would like your site set up with fast, properly licensed typography as part of a build or redesign, see our [website development](/website-development/) services or [contact us](/contact/). For related reading, our post on [conversion-critical elements of landing pages](/conversion-critical-elements-of-landing-pages/) covers readability further, and [WordPress plugins](/wordpress-plugins/) explains how to choose them sensibly.
