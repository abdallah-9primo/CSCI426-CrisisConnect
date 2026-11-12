
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Shared Components
import Navbar from './components/Navbar'
import BreakingNewsTicker from './components/BreakingNewsTicker'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Shelters from './pages/Shelters'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <BreakingNewsTicker />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shelters" element={<Shelters />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
