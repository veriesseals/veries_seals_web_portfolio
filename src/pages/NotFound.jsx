// File: client/src/pages/NotFound.jsx
// ---------------------------------------------------------------
// 404 page: shown for any URL that doesn't match a route.
// ---------------------------------------------------------------
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="container py-5 text-center">
      <h1>Page not found</h1>
      <p className="text-body-secondary">That page doesn't exist.</p>
      {/* Send visitors back home instead of leaving them stuck */}
      <Link to="/" className="btn btn-outline-secondary mt-2">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
