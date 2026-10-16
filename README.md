# Veries Seals III: Portfolio Website (client)

React + Vite front end, styled with Bootstrap 5 and custom CSS.

## Run it

```bash
npm install     # first time only (and after pulling new dependencies)
npm run dev     # start dev server at http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build locally
```

## Folder structure

```
client/
├── index.html                # HTML shell React mounts into
├── vite.config.js            # Vite dev server / build config
├── public/                   # Static files served as-is (favicon, resume PDF)
└── src/
    ├── main.jsx              # Entry: global styles + router + mount
    ├── App.jsx               # Route definitions
    ├── components/layout/    # Navbar, Footer, Layout shell
    ├── pages/                # Home, Resume, Apps, Contact, NotFound
    ├── data/apps.js          # Project content for the Apps page
    ├── styles/               # variables.css (design tokens), global.css
    └── assets/images/        # Images imported by components
```
# veries_seals_web_portfolio
