<div align="center">

<h1>📊 CloudMotivIT – Interactive Document Analysis Tool</h1>
<p><strong>An AI‑assisted, fast, and highly interactive viewer for financial / PDF style reports built with React 19, Vite 7, Tailwind CSS v4, and Lucide icons.</strong></p>

<p>
<img src="public/vite.svg" height="52" alt="Vite Logo" />
<img src="src/assets/react.svg" height="52" alt="React Logo" />
</p>

<p>
<a href="#getting-started"><strong>Getting Started</strong></a> •
<a href="#features"><strong>Features</strong></a> •
<a href="#architecture"><strong>Architecture</strong></a> •
<a href="#customization"><strong>Customization</strong></a> •
<a href="#deployment"><strong>Deployment</strong></a>
</p>

</div>

---

## ✨ Overview
CloudMotivIT Analysis Tool provides a rich in‑browser experience for exploring structured reports. It pairs a document page viewer with a live analytical side panel containing citations that jump to (and highlight) relevant sections. This enables traceable, auditable insight extraction without modifying the source PDF asset.

> Current sample content: A stylized subset of a Maersk Interim Report rendered as React page components (not an embedded binary PDF) with semantic highlights.

## 🚀 Features
- Instant local development (Vite HMR)
- Page navigation with contextual highlight animations
- Citation buttons that: (1) switch page, (2) apply highlight, (3) optionally auto‑scroll (`scrollIntoView`)
- Smooth zoom (60%–150%) with responsive reflow using physical inch sizing
- Tailwind CSS v4 plugin for utility‑first styling (no manual config file required)
- Lucide icons for a consistent lightweight icon set
- Structured financial table with targeted row emphasis (animated background + scale)
- Separation of “analysis pane” and “source pages” for future AI augmentation
- Accessible semantic markup (headings, tables, buttons) foundation

## 🧱 Tech Stack
| Layer | Tech |
|-------|------|
| Runtime | React 19 (future version) |
| Bundler/Dev | Vite 7 |
| Styling | Tailwind CSS v4 plugin (`@tailwindcss/vite`) |
| Icons | `lucide-react` |
| Linting | ESLint 9 + React hooks + Refresh plugins |

> Node.js 18+ is recommended (Vite 7 & modern ESLint depend on contemporary Node features).

## 📂 Project Structure
```
analysis-tool/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ App.jsx          # Main application & page components
│  ├─ main.jsx         # React root & mounting
│  ├─ App.css / index.css
│  └─ assets/react.svg
├─ vite.config.js      # Vite + Tailwind plugin setup
├─ eslint.config.js    # Flat ESLint config
├─ package.json        # Scripts & dependencies
└─ README.md
```

## 🔧 Scripts
| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (HMR on `localhost:5173`) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve built assets locally |
| `npm run lint` | Run ESLint over project |

## 🏁 Getting Started
```bash
git clone <your-repo-url>
cd analysis-tool
npm install
npm run dev
```
Visit: http://localhost:5173

### Node & Package Notes
- React 19 is pre‑release; avoid legacy React tooling that assumes 18.
- If you experience eslint plugin version warnings, clear lockfile and reinstall.

## 🧠 Architecture
The tool renders “pages” as plain React components rather than parsing PDF bytes. This simplifies highlight logic and enables future addition of semantic overlays.

Core state (in `App.jsx`):
- `currentPage`: numeric page selection
- `activeHighlight`: ID of currently emphasized element
- `zoom`: percentage scaling applied to a container sized using inch units

Citation workflow:
1. User clicks a numbered button in analysis pane.
2. `handleCitationClick(page, highlightId)` updates page & highlight state.
3. Target component conditionally adds highlight classes (e.g., yellow background + transition).
4. Some elements use `ref` + `scrollIntoView` for contextual focus.

Highlight pattern example:
```jsx
<div className={highlightId === 'ebitda-p5' ? 'bg-yellow-300/50 rounded p-2' : 'p-2'}>
	...
</div>
```

## 🖌️ Styling
- Tailwind v4 plugin – no `tailwind.config.js` required for basic usage.
- Utility classes drive layout & transitions (`transition-colors`, `shadow-[...]`, etc.).
- Maintain semantic text sizing tokens for consistency (e.g., `text-sm`, `text-xs`).

## ➕ Adding New Pages
1. Create a component (e.g., `const PDFPage20 = ({ highlightId }) => (...)`).
2. Add new highlight zones using the conditional class pattern.
3. Extend the page switch `switch(currentPage)` block.
4. Add citation button referencing the new page & highlight ID.

## 🎯 Adding New Highlights
| Step | Action |
|------|--------|
| 1 | Choose a unique `highlightId` (e.g., `net-income-q2`). |
| 2 | Wrap target element: `highlightId === 'net-income-q2' ? 'bg-yellow-300/50 ...' : ''`. |
| 3 | Add button calling `handleCitationClick(pageNumber, 'net-income-q2')`. |
| 4 | (Optional) Add `ref` + `scrollIntoView` for tables. |

## 📦 Deployment
Static build is framework‑agnostic.
```bash
npm run build
# dist/ contains production assets
```
Deploy `dist/` folder to:
- Vercel (auto-detect Vite) – configure output directory `dist`
- Netlify – set build command `npm run build` & publish directory `dist`
- GitHub Pages – push `dist/` contents to `gh-pages` branch

### Cache / Performance Tips
- Enable HTTP compression (gzip or brotli) in hosting platform.
- Set long cache headers for hashed assets (Vite outputs cache‑safe filenames).

## ✅ Linting & Quality
- ESLint flat config (`eslint.config.js`).
- `react-refresh` + hooks plugins included.
- Run `npm run lint` before commits for consistency.

## 🧪 Future Enhancements (Ideas)
- Real PDF parsing & dynamic text layer alignment (e.g., PDF.js integration)
- AI extraction pipeline (generate the analysis pane from source document automatically)
- Persistent annotation storage (localStorage / backend API)
- Dark mode toggle
- Keyboard shortcuts for page navigation & zoom

## 🤝 Contributing
1. Fork & branch: `feat/<short-description>`
2. Install & run dev server.
3. Ensure lint passes.
4. Open PR with screenshot / GIF of changes.

## 🖼 Screenshots
Add screenshots to a new `docs/` folder or embed via issue attachments.
```md
![Analysis Pane Example](docs/analysis-pane.png)
```

## 📄 License
License: (TBD – please specify; e.g., MIT, Apache-2.0). Once chosen, add a `LICENSE` file at repo root.

## 🗺 FAQ
**Why not embed a binary PDF?** Rendering structured React components gives full control over semantics, animation and highlight logic.

**Will real PDFs be supported?** Yes—future iteration can extract text positions & map highlight IDs.

**Does zoom affect layout accuracy?** Pages scale proportionally using an inch baseline; text wraps as standard web content (not a fixed canvas).

## 🔒 Security Notes
No runtime network calls presently; safe to deploy as static content. Add CSP headers if embedding remote data later.

## 🛠 Troubleshooting
| Issue | Fix |
|-------|-----|
| ESLint version warnings | Delete `node_modules` & `package-lock.json`, reinstall |
| Icons not rendering | Ensure `lucide-react` installed & correct import names |
| Styles missing | Confirm Tailwind plugin present in `vite.config.js` |

---

Made with ⚡ Vite & ❤️ React. Contributions welcome!

