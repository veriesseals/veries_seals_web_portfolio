// File: client/src/components/layout/Navbar.jsx
// ---------------------------------------------------------------
// Main navigation (placeholder version for project setup).
// Uses Bootstrap's responsive navbar: full links on desktop,
// collapses into a hamburger menu on tablets and phones.
// We'll restyle this to match the design in the next step.
// ---------------------------------------------------------------
import { Link, NavLink } from 'react-router-dom'

// Nav links kept in one array so adding or renaming a page is a
// one-line change. "Works" from the concept is renamed "Apps".
const NAV_LINKS = [
  { to: '/', label: 'Home', end: true }, // `end` = only active on exactly "/"
  { to: '/resume', label: 'Resume' },
  { to: '/apps', label: 'Apps' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body border-bottom">
      <div className="container">
        {/* Brand / logo links back to the homepage */}
        <Link className="navbar-brand fw-semibold" to="/">
          Veries Seals III
        </Link>

        {/* Hamburger button: only visible below the md breakpoint */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible link list */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map(({ to, label, end }) => (
              <li className="nav-item" key={to}>
                {/* NavLink adds the "active" class to the current page */}
                <NavLink className="nav-link" to={to} end={end}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
