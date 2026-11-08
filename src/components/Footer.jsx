
import { NavLink } from 'react-router-dom'
import {
  ShieldPlus,
  Phone,
  MapPin,
  HeartHandshake,
} from 'lucide-react'

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Emergency Directory', path: '/contact' },
    { name: 'Shelters', path: '/shelters' },
  ]

  const emergencyNumbers = [
    { name: 'Lebanese Red Cross', number: '140' },
    { name: 'Civil Defense', number: '125' },
    { name: 'Fire Brigade', number: '175' },
    { name: 'Internal Security Forces', number: '112' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="flex items-center gap-3">
            <ShieldPlus className="h-10 w-10 text-red-500" />

            <div>
              <h2 className="text-2xl font-bold">
                CrisisConnect
              </h2>

              <p className="text-sm text-green-400">
                Lebanon Emergency & Relief
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-300">
            A humanitarian-focused university project
            designed to improve access to emergency
            information and relief resources in Lebanon.
          </p>

          <div className="mt-5 flex items-center gap-2 text-slate-300">
            <MapPin size={18} />
            <span>Lebanon</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Emergency Hotlines
          </h3>

          <ul className="mt-5 space-y-3">
            {emergencyNumbers.map((contact) => (
              <li key={contact.number}>
                <a
                  href={`tel:${contact.number}`}
                  className="flex items-center gap-3 text-slate-300 transition hover:text-white"
                >
                  <Phone size={16} className="text-red-400" />

                  <span>
                    {contact.name}: {contact.number}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Our Mission
          </h3>

          <HeartHandshake className="mt-5 h-9 w-9 text-green-400" />

          <p className="mt-4 leading-7 text-slate-300">
            Connecting communities with essential
            resources, humanitarian support,
            and emergency preparedness information.
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 px-6 py-6">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} CrisisConnect.
            All rights reserved.
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-xs leading-6 text-slate-400">
            Educational demonstration only. CrisisConnect is
            not an official emergency response service.
            Shelter listings and alerts may contain simulated
            information. For immediate emergencies, contact
            official authorities directly.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
