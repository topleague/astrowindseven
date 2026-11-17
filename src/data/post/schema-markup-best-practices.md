---
title: "Schema markup for small business sites"
excerpt: "What schema markup is, which types a small business site actually needs, how to add and test it, and why accurate markup beats more markup."
publishDate: 2014-07-24T00:00:00+05:30
updateDate: 2026-11-17T00:00:00+05:30
category: "SEO"
author: "Top League Technologies"
tags: []
metadata:
  title: "Schema Markup for Small Business Websites"
  description: "What schema markup is, which types a small business site actually needs, how to add and test it, and why accurate markup beats more markup."
---

Schema markup is a small block of structured data added to a page that tells search engines, in a fixed vocabulary, what the page is about. It says "this is a business, this is its address, these are its opening hours" in a form software can read without guessing. The vocabulary is maintained at schema.org and is shared by Google, Bing and others.

We first wrote about this in 2014, when almost nobody used it. Today most good WordPress themes and SEO plugins add some of it automatically. The questions have changed: what is already on your site, what is missing, and is it correct?

## What schema markup does, and what it does not

Markup helps search engines understand a page. For some page types it also makes the page eligible for richer search results, such as star ratings, product price and availability, event details or breadcrumb trails. Those extras can make a listing easier to notice.

It is not a ranking switch. Google's own documentation describes structured data as a way to help it understand content and show enhanced results, not as a direct ranking factor. Older claims that "sites with markup rank better" confused correlation with cause: sites that bother with markup tend to be better maintained in general. Treat schema as groundwork and a possible click-through improvement, not a shortcut.

Also, eligibility is not a guarantee. Google decides case by case whether to show a rich result, and it has narrowed or dropped some types over the years (FAQ and how-to results are far more limited than they once were). Check Google's current list before building a plan around a particular feature.

## Which types a small business site needs

You do not need hundreds of types. For most of our clients the useful set is short:

- **Organization or LocalBusiness** on the home page or contact page: name, logo, address, phone, opening hours, and links to your official profiles. Use the most specific business type that fits.
- **WebSite** for the site itself, which most plugins add by default.
- **Article or BlogPosting** on blog posts, with headline, author, and publish and update dates.
- **Product** (with offers, price, availability and reviews where you genuinely have them) on shop and product pages. If you run a store, see our note on [common ecommerce website mistakes](/ecommerce-website-mistakes/).
- **BreadcrumbList** on pages with a breadcrumb trail.
- **Event** if you run dated events people can attend.

Review markup deserves care. Only mark up reviews that real customers wrote and that are visible on the page. Marking up reviews you wrote about yourself breaks Google's guidelines and can cost you the rich results.

## Use JSON-LD

Structured data can be written in a few formats. Google recommends JSON-LD, a block of script in the page that sits apart from your visible HTML. It is easier to add, edit and remove than the older microdata approach, where attributes were woven through the page markup.

A minimal local business example looks like this:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Example Dental Clinic",
  "telephone": "+91-00000-00000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Example Road",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "751001",
    "addressCountry": "IN"
  }
}
</script>
```

The values above are placeholders. Yours must match what is shown on your site and on your Google Business Profile.

## How to add it

**WordPress with an SEO plugin.** Most established SEO plugins output organization, website, article and breadcrumb markup once you fill in the site details (business name, logo, social profiles). Check the plugin's settings before adding anything else, because two sources producing the same markup creates duplicates and conflicts.

**A dedicated schema plugin or custom code.** Useful when you need types the SEO plugin does not cover, such as Product details from custom fields. Choose one source per type.

**Generators.** For a one-off page, a JSON-LD generator or a hand-written block pasted into the page template is fine. Keep a copy so you can update it when your hours or address change.

## Test before and after publishing

Run the page through Google's Rich Results Test, which shows which rich result types Google can read and flags errors and warnings. The Schema Markup Validator at validator.schema.org checks general schema.org syntax, including types Google does not use for rich results. After launch, the enhancement reports in Google Search Console show issues across the whole site over time. Details of what Google supports are at [developers.google.com/search](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

## Best practices that matter

1. **Mark up only what visitors can see.** Structured data that describes content missing from the page is a guideline violation.
2. **Keep it accurate and current.** Old prices, closed branches and wrong phone numbers in markup are worse than no markup.
3. **Be specific.** Pick the most precise type available rather than a generic one.
4. **Fill the required fields first,** then the recommended ones. Do not invent values to fill empty properties.
5. **Do not overdo it.** The 2014 advice that more markup is always better was wrong. Spammy or misleading markup can lead to a manual action, which removes your rich result eligibility. Correct, relevant markup on the pages that matter is enough.
6. **Check after redesigns and plugin changes.** Markup often disappears quietly when a theme or plugin is swapped.

## Closing thought

For a small business, schema is a quarter-day job done once and checked a few times a year. If you want help auditing what your site outputs now, or want it set up properly as part of broader technical work, our [SEO services](/seo-services/) cover it, and you can [get in touch](/contact/) with a link to your site.
