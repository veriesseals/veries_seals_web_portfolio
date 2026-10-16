// File: client/src/main.jsx
// ---------------------------------------------------------------
// App entry point. Loads global styles, wraps the app in the
// router, and mounts React into <div id="root"> in index.html.
// ---------------------------------------------------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// --- Third-party styles & scripts (load order matters) ---------
// Bootstrap's base CSS first, so our own styles can override it.
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap's JS bundle (includes Popper) powers the mobile
// navbar toggle, dropdowns, modals, etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Icon font, e.g. <i className="bi bi-github"></i>
import 'bootstrap-icons/font/bootstrap-icons.css'

// --- Our styles (loaded last so they win over Bootstrap) -------
import './styles/variables.css' // Design tokens: colors, fonts, spacing
import './styles/global.css'    // Site-wide base styles

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode flags common mistakes during development only.
  <StrictMode>
    {/* BrowserRouter lets us use real URLs like /resume and /apps */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
