# Mastercraft Global Ltd — Jekyll Site

## Quick Start

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000`

---

## Structure

```
/
├── _config.yml          ← Site settings, popup config, social links, nav CTA
├── _data/
│   ├── nav.yml          ← Navigation links (edit here to update nav on all pages)
│   └── footer.yml       ← Footer links (edit here to update footer on all pages)
├── _includes/
│   ├── head.html        ← <head> tag — fonts, CSS, meta
│   ├── nav.html         ← Navigation bar (rendered from _data/nav.yml)
│   ├── footer.html      ← Footer (rendered from _data/footer.yml)
│   ├── announcement-bar.html  ← Top announcement strip
│   ├── newsletter-modal.html  ← Email popup modal
│   └── cookie-notice.html     ← Cookie consent bar
├── _layouts/
│   └── default.html     ← Master layout wrapping all pages
├── assets/
│   ├── css/main.css     ← All shared styles (nav, footer, buttons, popups)
│   └── js/main.js       ← All shared JS (scroll reveal, popups, mobile menu)
├── index.html           ← Homepage  → mastercraftglobal.com/
├── about/index.html     ← About     → mastercraftglobal.com/about/
├── services/index.html  ← Services  → mastercraftglobal.com/services/
├── work/index.html      ← Work      → mastercraftglobal.com/work/
├── founder/index.html   ← Founder   → mastercraftglobal.com/founder/
├── contact/index.html   ← Contact   → mastercraftglobal.com/contact/
└── academy/index.html   ← Academy   → mastercraftglobal.com/academy/
```

---

## How to Make Common Changes

### Change the nav links
Edit `_data/nav.yml` — changes update every page automatically.

### Change the footer links
Edit `_data/footer.yml` — changes update every page automatically.

### Change the logo, email, phone, social links
Edit `_config.yml` — top section has all site identity fields.

### Turn a popup on or off
Edit `_config.yml` → `popups:` section. Set `enabled: true/false`.

### Change the announcement bar text
Edit `_config.yml` → `popups.announcement_bar.text`

### Change newsletter modal trigger
Edit `_config.yml` → `popups.newsletter_modal.trigger`
Options: `exit_intent` | `scroll_50` | `timer_5` (number = seconds)

### Add the newsletter form action (Mailchimp, ConvertKit, etc.)
Edit `_config.yml` → `popups.newsletter_modal.form_action`
Paste your Mailchimp POST URL there.

### Add the Academy registration form link
In `academy/index.html` → find the `href="#"` on Join buttons → replace with your form URL.

### Add Mastercraft Designs images
In `services/index.html` → find `.designs-img-placeholder` divs → replace with `<img>` tags.

### Add real Academy member testimonials
In `academy/index.html` → find `.ac-testimonial-card` divs → replace placeholder text.

### Update pricing
In `_config.yml` you can store prices as site variables, or edit directly in each page.

---

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to Settings → Pages → set source to `main` branch `/` (root)
3. Add your CNAME file with `mastercraftglobal.com`
4. GitHub Pages will build Jekyll automatically

## Deploying to Netlify

1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `jekyll build`
4. Publish directory: `_site`

