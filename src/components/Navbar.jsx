
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Phone, ShieldPlus } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Emergency Directory', path: '/contact' },
    { name: 'Shelters', path: '/shelters' },
  ]

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-red-600 font-semibold'
      : 'text-slate-700 hover:text-red-600'

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        <NavLink to="/" className="flex items-center gap-2">
          <ShieldPlus className="h-9 w-9 text-red-600" />
          <div>
            <span className="block text-xl font-bold text-slate-900">
              CrisisConnect
            </span>
            <span className="text-xs text-green-700">
              Lebanon Emergency & Relief
            </span>
          </div>
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a
          href="tel:140"
          className="hidden items-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700 md:flex"
        >
          <Phone size={18} />
          Emergency 140
        </a>

        <button
          type="button"
          className="text-slate-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="space-y-4 border-t bg-white px-5 py-5 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block ${isActive ? 'font-semibold text-red-600' : 'text-slate-700'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="tel:140"
            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white"
          >
            <Phone size={18} />
            Emergency 140
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
