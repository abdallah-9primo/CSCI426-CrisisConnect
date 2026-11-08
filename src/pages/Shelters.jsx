
import { useState } from 'react'
import {
  Search,
  MapPin,
  Users,
  Phone,
  X,
  House,
  Info,
} from 'lucide-react'
import sheltersData from '../data/sheltersData.json'

function Shelters() {
  const [search, setSearch] = useState('')
  const [governorate, setGovernorate] = useState('All')
  const [selectedShelter, setSelectedShelter] = useState(null)

  const governorates = [
    'All',
    'Beirut',
    'Mount Lebanon',
    'South',
    'Bekaa',
    'North',
  ]

  const statusStyles = {
    available: {
      label: 'Available',
      color: 'bg-green-100 text-green-800',
    },
    limited: {
      label: 'Almost Full',
      color: 'bg-yellow-100 text-yellow-800',
    },
    full: {
      label: 'Full',
      color: 'bg-red-100 text-red-800',
    },
  }

  const filteredShelters = sheltersData.filter((shelter) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      shelter.name.toLowerCase().includes(searchText) ||
      shelter.area.toLowerCase().includes(searchText)

    const matchesGovernorate =
      governorate === 'All' ||
      shelter.governorate === governorate

    return matchesSearch && matchesGovernorate
  })

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-red-700 px-6 py-16 text-center text-white">
        <House className="mx-auto mb-4 h-12 w-12" />

        <h1 className="text-4xl font-bold md:text-5xl">
          Shelter & Relief Directory
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-red-100">
          Explore demonstration shelter information
          across Lebanon using search and location filters.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-1 shrink-0 text-amber-700" />

            <p className="text-sm leading-6 text-slate-700">
              Demo data only. Shelter names, availability,
              capacity, and contact information are fictional.
              Do not use this directory to make real emergency
              or evacuation decisions.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-slate-900">
            Find a Shelter
          </h2>

          <div className="relative mt-5">
            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={20}
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by shelter name or area..."
              aria-label="Search shelters"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-red-500"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {governorates.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGovernorate(item)}
                aria-pressed={governorate === item}
                className={`rounded-xl px-4 py-2 font-medium transition ${
                  governorate === item
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm font-medium text-slate-600">
          Showing {filteredShelters.length} demonstration shelters
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredShelters.map((shelter) => {
            const remaining = shelter.capacity - shelter.occupied
            const status = statusStyles[shelter.status]

            return (
              <article
                key={shelter.id}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <House className="h-9 w-9 text-red-600" />

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {shelter.name}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  <span>
                    {shelter.area}, {shelter.governorate}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <Users size={18} />
                  <span>
                    {shelter.occupied} / {shelter.capacity} occupied
                  </span>
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  Remaining spaces: {remaining}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedShelter(shelter)}
                  className="mt-6 w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  View Details
                </button>
              </article>
            )
          })}
        </div>

        {filteredShelters.length === 0 && (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-md">
            <Search className="mx-auto text-slate-400" size={36} />

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              No shelters found
            </h3>

            <p className="mt-2 text-slate-600">
              Try another search term or governorate.
            </p>
          </div>
        )}
      </section>

      {selectedShelter && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedShelter(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="shelter-modal-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-7 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id="shelter-modal-title"
                className="text-2xl font-bold text-slate-900"
              >
                {selectedShelter.name}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedShelter(null)}
                aria-label="Close shelter details"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={24} />
              </button>
            </div>

            <p className="mt-4 flex items-center gap-2 text-slate-600">
              <MapPin size={18} />
              {selectedShelter.address}
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-5">
              <p className="text-slate-700">
                Capacity: {selectedShelter.capacity}
              </p>

              <p className="mt-2 text-slate-700">
                Occupied: {selectedShelter.occupied}
              </p>

              <p className="mt-2 font-semibold text-green-700">
                Remaining: {selectedShelter.capacity - selectedShelter.occupied}
              </p>
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Available Facilities
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              {selectedShelter.facilities.map((facility) => (
                <li key={facility}>{facility}</li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 text-slate-700">
              <Phone className="text-red-600" size={20} />
              <span>{selectedShelter.contact}</span>
            </div>

            <p className="mt-5 text-xs text-amber-700">
              Fictional shelter information for educational use only.
            </p>

            <button
              type="button"
              onClick={() => setSelectedShelter(null)}
              className="mt-6 w-full rounded-xl bg-slate-900 p-3 font-semibold text-white hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  )
}

export default Shelters
