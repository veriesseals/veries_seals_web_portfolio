// File: client/src/components/layout/Navbar.jsx
// ---------------------------------------------------------------
// Main navigation bar.
// - Desktop: brand on the left, links on the right.
// - Tablet/phone: links collapse behind a ☰ button.
// The mobile menu is controlled with React state instead of
// Bootstrap's JavaScript, so it closes when a link is tapped.
// (Bootstrap's version would stay open in a React app, because
// the page never fully reloads.)
// ---------------------------------------------------------------
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css' // Styles for this component only

// Nav links in one array: adding or renaming a page is a
// one-line change. "Works" from the concept is renamed "Apps".
// ---------------------------------------------------------------
const NAV_LINKS = [
  { to: '/', label: 'Home', end: true }, // `end` = active only on exactly "/"
  { to: '/resume', label: 'Resume' },
  { to: '/apps', label: 'Apps' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  // true = mobile menu open, false = closed (starts closed)
  const [isOpen, setIsOpen] = useState(false)

  // Called whenever a link is clicked so the mobile menu closes
  const closeMenu = () => setIsOpen(false)

  return (
      <header className="site-header">
        <nav className="navbar navbar-expand-md site-nav" aria-label="Main navigation">
          <div className="container">
            {/* --- Brand: links home. Two spans let us style the
                 first and last name differently. --- */}
            <Link className="navbar-brand site-brand" to="/" onClick={closeMenu}>
              <span className="site-brand__first">Veries</span>{' '}
              <span className="site-brand__last">Seals III</span>
            </Link>

            {/* --- Mobile menu button (hidden on desktop by Bootstrap).
                 Clicking flips isOpen between true and false. --- */}
            <button
                className="navbar-toggler site-toggler"
                type="button"
                aria-controls="mainNav"
                aria-expanded={isOpen} // Tells screen readers if the menu is open
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsOpen((open) => !open)}
            >
              {/* Bootstrap Icons: ✕ when open, ☰ when closed */}
              <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-list'} aria-hidden="true"></i>
            </button>

            {/* --- Link list. Bootstrap shows the menu when it has the
                 "show" class, so we add it only while isOpen is true. --- */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
              <ul className="navbar-nav ms-auto site-nav__links">
                {NAV_LINKS.map(({ to, label, end }) => (
                    <li className="nav-item" key={to}>
                      {/* NavLink adds the "active" class to the current page,
                      which our CSS uses for the dark text + underline */}
                      <NavLink
                          className="nav-link site-nav__link"
                          to={to}
                          end={end}
                          onClick={closeMenu}
                      >
                        {label}
                      </NavLink>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar



