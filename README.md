# Vanilla Web Starter

A tiny static site that currently embeds a Framer page via a full‑viewport iframe.

## Files
- `index.html` – minimal page containing only an iframe
- `style.css` – small styles to make the iframe fill the viewport
- `script.js` – (currently unused) helper utilities kept for later

## Run Locally
- Open `index.html` directly in your browser (double‑click it).
- The embedded page loads from the network; ensure you’re online.

## Git Setup
Initialize the repo and push to your remote:

1. Create a new empty repository on your Git host (e.g., GitHub).
2. From this folder, run:

   - `git init`
   - `git add .`
   - `git commit -m "Initial commit: iframe embed"`
   - `git branch -M main`
   - `git remote add origin <your-remote-url>`
   - `git push -u origin main`

This project includes a minimal `.gitignore` and `.gitattributes` for clean commits and consistent line endings.

## Notes
- No build steps or dependencies.
- To replace the iframe with a full local copy later, remove the iframe and paste the exported markup/assets from the source.
