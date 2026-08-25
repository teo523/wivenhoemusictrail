# Wivenhoe Music Trail

Unified landing website and interactive timetable.

## Repository

This project is configured for the GitHub repository `wivenhoemusictrail`.

The live site uses the custom domain `wivenhoemusictrail.com`, so the application is intentionally served from the site root (`/`) rather than from `/wivenhoemusictrail/`. The repository name therefore does not need to be used as a Next.js `basePath`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The timetable is at `http://localhost:3000/timetable/`.

## Deploy to GitHub Pages

1. Push this project to `teo523/wivenhoemusictrail`.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`; `.github/workflows/deploy.yml` builds and deploys the static site.

The `public/CNAME` file contains `wivenhoemusictrail.com`.

## Important

Do not commit `node_modules`, `.next`, `out`, or TypeScript build-cache files. They are excluded by `.gitignore`.
