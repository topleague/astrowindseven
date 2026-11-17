---
title: "How to protect your WordPress website from hackers"
excerpt: "Practical steps to keep a WordPress site safe: strong logins, updates, trusted plugins, backups, and what to do if your site has already been hacked."
publishDate: 2014-12-03T00:00:00+05:30
updateDate: 2026-11-17T00:00:00+05:30
category: "WordPress"
author: "Top League Technologies"
tags:
  - wordpress
  - security
  - maintenance
metadata:
  title: "How to Protect Your WordPress Site from Hackers"
  description: "Practical steps to keep a WordPress site safe: strong logins, updates, trusted plugins, backups, and what to do if your site has already been hacked."
---

WordPress runs a very large share of the web, which makes it a constant target. Most attacks are not personal. Automated tools scan thousands of sites a day looking for weak passwords, outdated plugins and exposed login pages, and they attack whatever gives way first.

The good news is that a handful of habits stops the great majority of these attempts. Below is what we do on the sites we build, followed by what to do if your site has already been compromised.

## How sites usually get broken into

In our experience, break-ins come from a short list of causes:

- **Weak or reused passwords** on WordPress admin accounts, hosting panels or email.
- **Outdated plugins and themes** with known vulnerabilities. Attackers publish and scan for these within days of a fix being released.
- **Plugins or themes from untrusted sources**, including "free" copies of paid products, which are a common way to smuggle in malicious code.
- **Compromised accounts elsewhere**: a hosting login, an FTP account or an email address that was exposed in another breach.

A hacked site can be used to host spam pages, redirect your visitors to other sites, steal customer data or send junk email. Search engines may also warn people away from the site, which is how many owners first find out.

## Secure the logins

**Use unique, long passwords.** A password manager makes this painless. Use a different password for WordPress, hosting, your domain registrar and the email address tied to them.

**Avoid the username "admin".** Older installs often still have it, which hands attackers half of the login. Create a new administrator account with an unrelated username, log in with it, then remove the old one and reassign its content.

**Turn on two-factor authentication.** A second step, usually a code from an authenticator app, means a stolen password alone is not enough. Several reputable security plugins offer this, and many hosts do too. Enable it for every user who can publish or change settings.

**Give people only the access they need.** A writer needs the Author or Editor role, not Administrator. Remove accounts of people who have left, including former freelancers and agencies.

**Limit login attempts.** Rate limiting, either through a security plugin or at the hosting or firewall level, slows down automated password guessing.

**Use SFTP, not plain FTP.** Plain FTP sends credentials without encryption. If your host offers SFTP or SSH, use it, and change those credentials when a developer's engagement ends rather than on a fixed calendar.

## Keep everything updated

Updates are the single most effective protection. WordPress core, your theme and every plugin should be kept current. Many of the sites we see compromised were running a plugin that had a fix available for months.

Some practical rules:

1. Turn on automatic updates for security releases, and for plugins you trust.
2. Take a backup before major updates, and check the site afterwards.
3. Delete plugins and themes you are not using. Deactivated code can still be exploited.
4. Before installing a plugin, check that it is actively maintained, recently updated and compatible with your WordPress version. If it has been abandoned, look for an alternative. Our [WordPress plugins guide](/wordpress-plugins/) covers how we choose.
5. Never install nulled or pirated themes and plugins.

## Back up properly

Backups do not stop an attack, but they decide how bad it turns out to be. A good setup has:

- Automatic, regular backups of both files and database. Daily is common for active sites.
- Copies stored away from the web server, such as in cloud storage, not only on your host.
- A restore you have actually tested. A backup you have never restored is a hope, not a plan.

Many hosts include backups. Check how long they keep them and whether you can restore them yourself. Our [web hosting guide](/web-hosting-service-guide/) lists what to look for.

## Add protective layers

- **HTTPS everywhere.** An SSL certificate is standard and usually free through your host.
- **A firewall.** This can be a web application firewall from a security service or your host, or one built into a security plugin. It blocks known malicious traffic before it reaches WordPress.
- **Malware scanning and file monitoring.** Established security plugins and services can alert you when core files change unexpectedly.
- **Disable file editing in the dashboard.** The built-in theme and plugin editors let anyone who gets in change code directly. Developers can switch them off with a single setting in the configuration file.
- **Choose a decent host.** Isolated accounts, up-to-date server software and good support matter more than a low price.

You may see advice to hide your WordPress version or remove certain tags from the page header. This is not real security. Attackers do not need the version number to test for weaknesses, so spend your time on updates and logins instead.

## Review access regularly

Once or twice a year, go through the list of users, plugins, API keys and connected services. Remove what you do not recognise or no longer use. Check that the admin email address on the site is one you control, and that the people who manage your domain and hosting accounts are the ones who should.

## If your site has already been hacked

Stay calm and work in order:

1. **Do not just delete files at random.** You may remove evidence or leave the actual hole open.
2. **Restore from a clean backup** taken before the problem, if you have one. Otherwise ask a professional to clean the site.
3. **Change every password**: WordPress users, hosting, database, SFTP, and the email accounts connected to them. Do this after cleaning, from a device you trust.
4. **Update everything** and remove anything outdated or untrusted.
5. **Find out how they got in.** If you only remove the symptoms, the site is likely to be hacked again. Logs from your host can help.
6. **Check Google Search Console.** If Google has flagged the site, fix the issue and request a review through the Security Issues report.
7. **Tell your customers** if their data may have been exposed. Depending on where you operate, there may be legal duties to do so.

After recovery, put the habits above in place. Most repeat infections happen because the original weakness was never closed.

## A realistic goal

No site is perfectly safe, and you do not need perfection. You need to be a harder target than the next one, and to be able to recover quickly if something goes wrong. Strong logins, current software, trusted plugins and tested backups achieve both.

If you would like help securing a WordPress site, or want a site built with these basics in place, see our [website development service](/website-development/) or [get in touch](/contact/).
