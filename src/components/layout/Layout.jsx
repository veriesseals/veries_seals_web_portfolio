// File: client/src/components/layout/Layout.jsx
// ---------------------------------------------------------------
// Shared page shell: Navbar on top, the current page in the
// middle, Footer at the bottom. React Router swaps the page
// content into <Outlet /> based on the URL.
// ---------------------------------------------------------------
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <div className="site-wrapper">
      <Navbar />
      {/* <main> grows to fill space so the footer stays at the bottom */}
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
