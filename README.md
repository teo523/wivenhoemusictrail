# Wivenhoe Music Trail

Unified landing website + interactive timetable for the GitHub repository `teo523/wivenhoemusictrail`.

This version uses **no GitHub Actions**. GitHub Pages serves the generated static site from the `docs/` folder on the `main` branch.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Publish after making changes

Run:

```bash
npm run build:pages
```

That creates/replaces the `docs/` folder with the static website. Then:

```bash
git add .
git commit -m "Update website"
git push origin main
```

## One-time GitHub Pages setup

In the repository open **Settings → Pages**. Under **Build and deployment** choose:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/docs**

Click **Save**.

The custom domain remains `wivenhoemusictrail.com`. The generated `docs/` folder will include the `CNAME` file because it is stored in `public/CNAME`.

## Important

Do not commit `node_modules`, `.next`, or `out`. The generated `docs/` folder **should** be committed because GitHub Pages publishes it directly.
