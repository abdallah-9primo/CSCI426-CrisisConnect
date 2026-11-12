
import { Link } from 'react-router-dom'
import {
  Phone,
  House,
  ShieldAlert,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Radio,
  ShieldCheck,
} from 'lucide-react'

function Home() {
  const emergencyNumbers = [
    { name: 'Lebanese Red Cross', number: '140', icon: HeartHandshake },
    { name: 'Civil Defense', number: '125', icon: ShieldAlert },
    { name: 'Fire Brigade', number: '175', icon: Phone },
    { name: 'Internal Security Forces', number: '112', icon: ShieldCheck },
  ]

  const services = [
    {
      title: 'Find a Shelter',
      description: 'Explore shelter listings and search by location or governorate.',
      icon: House,
      path: '/shelters',
      color: 'text-green-700',
      background: 'bg-green-50',
    },
    {
      title: 'Emergency Directory',
      description: 'Access essential emergency hotlines and contact information.',
      icon: Phone,
      path: '/contact',
      color: 'text-red-600',
      background: 'bg-red-50',
    },
    {
      title: 'Safety & Preparedness',
      description: 'Learn basic emergency safety and evacuation guidance.',
      icon: ShieldAlert,
      path: '/services',
      color: 'text-orange-600',
      background: 'bg-orange-50',
    },
    {
      title: 'About CrisisConnect',
      description: 'Discover our humanitarian mission and platform objectives.',
      icon: HeartHandshake,
      path: '/about',
      color: 'text-blue-600',
      background: 'bg-blue-50',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-green-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
            <Radio size={17} />
            Lebanon Emergency & Relief Platform
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Help, Hope & Safety.
            <span className="mt-3 block text-red-400">
              All in One Place.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            CrisisConnect helps communities in Lebanon explore
            emergency contacts, humanitarian resources, and
            essential safety information through one accessible platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/shelters"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
            >
              <House size={20} />
              Find Shelter
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              <Phone size={20} />
              Emergency Contacts
            </Link>
          </div>

          <p className="mt-7 text-xs text-slate-400">
            Educational demonstration only. Not a live emergency response service.
          </p>
        </div>
      </section>

      {/* EMERGENCY HOTLINES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Emergency Quick Dial
          </h2>
          <p className="mt-3 text-slate-600">
            Tap a number to call an official emergency service.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {emergencyNumbers.map((contact) => {
            const Icon = contact.icon

            return (
              <a
                key={contact.number}
                href={`tel:${contact.number}`}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-10 w-10 text-red-600" />

                <h3 className="mt-5 font-semibold text-slate-800">
                  {contact.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-red-600">
                    {contact.number}
                  </span>

                  <Phone
                    size={20}
                    className="text-slate-400 group-hover:text-red-600"
                  />
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              How Can We Help?
            </h2>

            <p className="mt-3 text-slate-600">
              Explore the essential features of CrisisConnect.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  key={service.title}
                  to={service.path}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.background}`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-red-600">
                    Explore
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 rounded-2xl bg-green-50 p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              <HeartHandshake size={18} />
              Our Humanitarian Mission
            </div>

            <h2 className="text-3xl font-bold leading-tight text-slate-900">
              Stronger Communities Through Information
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              CrisisConnect is a university project inspired by
              the need for accessible and organized humanitarian
              information during emergencies in Lebanon.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-900"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <MapPin className="h-12 w-12 text-green-700" />

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Supporting Lebanon
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Designed with accessibility, responsive layouts,
              and clear emergency information in mind.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
                Safety
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                Relief
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Community
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
