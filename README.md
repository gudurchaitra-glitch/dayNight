# Day-to-Night Workspace Animation

This version uses the original generated animation as the scene asset, rather than redrawing the person with a different SVG pose. That preserves the girl's seated position, silhouette, chair, desk, monitors, and city composition exactly as in the reference animation. The scene contains no added NOVA/FUTURE labels or floating text boxes.

## Files
- `index.html` — page structure
- `styles.css` — responsive frame and controls
- `script.js` — restart and pause/play controls
- `assets/day-to-night.gif` — original day-to-night animation

## Preview locally
Open `index.html` in a browser. For a local server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Extract the ZIP.
2. Upload the **contents** of this folder (including the `assets` folder) to the root of your GitHub repository.
3. In **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. Wait for the Pages deployment to finish. The site URL appears in **Settings → Pages**.
