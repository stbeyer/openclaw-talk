# Secure AI-Powered Workflows with OpenClaw

Self-contained static site for the talk by Dr. Stefan Beyer (Oak Security).

`index.html` is the Marp-rendered slide deck — open it in any browser. It is
fully self-contained: no CDN, no JavaScript dependencies, all images live
alongside the HTML.

`oak-slides.pdf` is the same deck exported to PDF.

## Publish to GitHub Pages

Pick whichever workflow fits your existing repo.

### Option A — brand-new repo (fastest)

```bash
gh repo create openclaw-talk --public --source=. --push
# In the repo Settings → Pages: set Source = "Deploy from a branch",
# Branch = "main", Folder = "/ (root)". Save.
```

After ~30 seconds the deck is live at
`https://<your-user>.github.io/openclaw-talk/`.

### Option B — drop into an existing repo under `/docs`

Copy the contents of this folder into `docs/` at the root of an existing
repository, commit, push.

In the repo Settings → Pages: set Source = "Deploy from a branch",
Branch = `main`, Folder = `/docs`. The deck will be served at
`https://<your-user>.github.io/<repo>/`.

### Option C — dedicated `gh-pages` branch

```bash
git checkout --orphan gh-pages
git rm -rf .          # clear working tree
cp -r /path/to/site/. .
git add . && git commit -m "Publish OpenClaw deck"
git push -u origin gh-pages
```

In the repo Settings → Pages: set Source = "Deploy from a branch",
Branch = `gh-pages`, Folder = `/ (root)`.

## Files

| File                    | Purpose                                |
| ----------------------- | -------------------------------------- |
| `index.html`            | The slide deck                         |
| `oak-slides.pdf`        | PDF export of the deck                 |
| `avatar_*.jpg`          | Agent avatars (Alfred, Betty, …)       |
| `server_*.jpg`          | Server illustrations (Homebase, Frontier) |
| `qr.png`                | Final-slide QR                         |
| `oak-logo.svg`          | Oak Security logo                      |
