# Vera — editable artist portfolio

Static HTML/CSS/JS implementation based on the supplied Desktop, Tablet and Mobile Figma screenshots.

## Run locally

Open `index.html` directly, or use a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit content

Almost all text, image paths, project names and years are in `data.js`.

Replace files in `assets/` with your own artwork images and update their paths in `data.js`.

## Structure

- `index.html` — page structure
- `styles.css` — responsive layout and visual styling
- `data.js` — editable content/data
- `script.js` — rendering + small navigation interaction
- `assets/` — artwork images extracted from the supplied screenshots

The design uses a black field, condensed serif typography, red action accents, two-column desktop work grid, one-column mobile work list, the large Album Art feature, full-width image hero and responsive collection cards.
