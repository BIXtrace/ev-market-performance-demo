# EV Market Performance Insights — Demo Website

A responsive static portfolio/demo site for the Electric Vehicle Market Performance Insights Tableau project.

## Files
- `index.html` — landing page and Tableau Public embed
- `styles.css` — responsive styling
- `script.js` — small fallback helper

## Preview locally
Open `index.html` in a browser. An internet connection is needed for Google Fonts and the embedded Tableau visualization.

## Publish with GitHub Pages
1. Create a new GitHub repository (for example, `ev-market-performance-demo`).
2. Upload `index.html`, `styles.css`, `script.js`, and this README to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. Your URL will be shown in Settings → Pages.

## Tableau embed note
The page uses the Tableau Embedding API v3 and the view path `NikhilChouhan/EVMarketPerformanceInsights`, based on the supplied Tableau Public URL. If Tableau changes the view path or the embed does not load, use the direct Tableau Public link on the page or update the `src` on the `<tableau-viz>` element in `index.html` using the official embed URL from Tableau's **Share → Embed Code** option.

## Project links
- Project reference: https://myskillwallet.ai/dashboard/skillwallet/module/data-analytics-with-tableau-6abcef62500f0d3aeede46d5/projects/6aba31ec5015c35b9863f7ce/Electric-Vehicle-Market-Performance-Insights-6adf877708abfb0180577e3d
- Tableau Public: https://public.tableau.com/app/profile/bix.trace/viz/NikhilChouhan/EVMarketPerformanceInsights
