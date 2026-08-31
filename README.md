# Personal Website (GitHub Pages)

## 2026-08-31 Version

This dated version adds a Chinese/English language switch, updated 2026 publication metadata, the D³EM publication and news item, a Students section, refined education spacing, unified profile icons, the new Jinan University email address, and privacy-friendly visitor analytics.

The site opens in English on a visitor's first visit. The Chinese version uses KaiTi-compatible system fonts, and an explicit language choice is remembered locally.

### Visitor analytics

The live site is connected to the `zcwang` [GoatCounter](https://www.goatcounter.com/) site. Tracking runs only on `wangzc1997.github.io`; local previews do not create pageviews.

The footer displays two aggregate counts: visits since August 31, 2026, and visits in the past month. GoatCounter's public visitor-count permission must remain enabled for these totals to appear; detailed referrers, pages, locations, browsers, and time ranges stay in the private GoatCounter dashboard.

If GoatCounter or a browser extension blocks the analytics request, the visitor count stays hidden and the rest of the page continues to work normally.

The three contact icons use the MIT-licensed [Bootstrap Icons](https://icons.getbootstrap.com/) family for consistent sizing.

## Deploying to GitHub Pages

1. **Create the repository** - On GitHub, create `your-github-username.github.io` (it must match your username exactly).
2. **Copy the site** - Move everything inside the `site` folder (`index.html`, `assets`, etc.) to the root of that repo.
3. **Commit & push**
   ```bash
   git add .
   git commit -m "feat: add personal site"
   git push origin main
   ```
4. **Enable Pages** - Repo -> Settings -> Pages -> select "Deploy from a branch", choose `main` / root, and save. In a few minutes the site will be live at `https://your-github-username.github.io`.

> If Codex CLI already has access to your GitHub account, just add the remote, push, and you're done.

## Customizing the Layout

- **Profile card** - Replace the initials inside `.avatar` with a real portrait (drop `assets/img/profile.jpg` in place) and update the contact / social links in the `<ul class="profile-links">` list.
- **Sections** - Each `<section>` (`#about`, `#news`, `#publications`, etc.) is independent. Add more list items, reorder sections, or create new ones following the same structure.
- **Styling** - Colors, spacing, and typography are centralized at the top of `assets/css/style.css`. Tweaking the `:root` variables or section-specific classes instantly refreshes the aesthetic.
- **Content updates** - `index.html` is intentionally lightweight HTML with no build pipeline, so you can edit text directly from any editor.

## SEO & Visibility

- Update `<meta name="description">` in `index.html` with keywords such as "privacy computing", "federated learning", and "Beihang University".
- Link to this site from Google Scholar, LinkedIn, Zhihu, etc., so crawlers discover it faster.
- Keep the News/Publications sections up to date - regular edits encourage search engines to re-index.

## Next Ideas

1. Add new pages (e.g., `/publications.html`, `/blog`) and link them from the header nav.
2. Automate deployments with GitHub Actions if you later introduce a build step (Markdown -> HTML, static site generator, etc.).
3. Enhance the UI with JavaScript (dark mode toggle, interactive publications) or adopt a utility framework such as Tailwind if the design grows.

Ping me whenever you want to extend the site (English/Chinese toggle, publication filtering, blog posts, etc.).
