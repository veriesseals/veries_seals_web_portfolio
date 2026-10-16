// File: client/src/components/layout/Footer.jsx
// ---------------------------------------------------------------
// Site footer (placeholder). Year updates automatically.
// ---------------------------------------------------------------

// Computed once when the module loads (outside the component) so
// rendering stays "pure", which is a React best practice.
const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-top py-4 mt-5">
      <div className="container text-center small text-body-secondary">
        © {CURRENT_YEAR} Veries Seals III. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
