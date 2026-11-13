# Day-to-Night Layered Workspace

A starter project for a portfolio hero animation. It uses **layered SVG + CSS + JavaScript**, so the major scene elements can be edited and animated independently.

## Run locally
Open `index.html` in a browser, or use VS Code's Live Server extension.

## Deploy with GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js`.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.

## Layer map
The SVG groups have stable IDs so you can find and edit them:

| Layer ID | Contents |
|---|---|
| `room-background` | Dark room and shelves |
| `window-layer` | Window frame and overall city viewport |
| `sky-fill`, `sun`, `moon`, `stars` | Day-to-night sky elements |
| `clouds` | Drifting cloud groups |
| `distant-city` | Distant skyline |
| `city-buildings` | Foreground skyscrapers |
| `building-windows`, `night-windows` | Day and illuminated night windows |
| `billboards` | Neon signage |
| `wind-turbine` | Rotating turbine |
| `flying-vehicles` | Moving air traffic |
| `plants` | Room plants |
| `desk` | Desk and accessories |
| `monitors`, `dashboard-ui` | Screens and animated interface |
| `character` | Seated person and typing arms |
| `neon-reflections` | Nighttime glow and desk reflections |

## Customize
- Change animation duration in `script.js` (`duration`).
- Change colors in the SVG gradients and `styles.css`.
- Adjust movement by editing the CSS keyframes.
- Add separate SVG groups for any new prop you want to animate independently.

## Notes
This is an editable vector starter illustration, not a pixel-perfect cutout of the reference image and not a Lottie JSON export. The character is a stylized placeholder. For a production-quality result, refine the illustration and split detailed character parts into separate paths before exporting/authoring in a Lottie workflow.
