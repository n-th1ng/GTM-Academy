# GTM Academy

A dependency-free, static training application for human-reviewed cold email and LinkedIn outreach.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys `index.html`, `styles.css`, `app.js`, and `.nojekyll` after every push to `main`.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. No custom domain is required; the default URL will be:

```text
https://<github-user-or-org>.github.io/<repository>/
```

## Course data

Progress, drafts, bookmarks, quiz scores, and practicum fields are stored in the learner's browser with `localStorage`. There is no account, database, server-side learner tracking, or manager dashboard.

The course specification is maintained in `GTM_Academy_Website_Knowledge_Base.md`.
