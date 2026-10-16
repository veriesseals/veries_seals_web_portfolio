// File: client/src/App.jsx
// ---------------------------------------------------------------
// Top-level component. Defines every page route of the site.
// The <Layout> wraps all pages so the navbar and footer appear
// everywhere; the active page renders in Layout's <Outlet />.
// ---------------------------------------------------------------
import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import Apps from './pages/Apps.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      {/* Parent route: shared layout (navbar + footer) */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />            {/* /        */}
        <Route path="resume" element={<Resume />} />  {/* /resume  */}
        <Route path="apps" element={<Apps />} />      {/* /apps    */}
        <Route path="contact" element={<Contact />} />{/* /contact */}
        {/* Catch-all: any unknown URL shows the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
