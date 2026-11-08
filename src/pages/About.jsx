
import { HeartHandshake, ShieldCheck, Radio, LockKeyhole } from 'lucide-react'

function About() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Humanitarian Support',
      description:
        'Helping civilians and displaced families access essential emergency and relief information.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety First',
      description:
        'Providing clear safety guidance and directing people toward trusted emergency services.',
    },
    {
      icon: Radio,
      title: 'Reliable Information',
      description:
        'Prioritizing information from official Lebanese emergency and humanitarian organizations.',
    },
    {
      icon: LockKeyhole,
      title: 'Privacy & Protection',
      description:
        'Promoting responsible data handling and protecting sensitive personal information.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-red-700 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          About CrisisConnect
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-red-100">
          Connecting communities, supporting civilians,
          and making emergency information easier to access
          across Lebanon.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Our Mission
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          CrisisConnect is a university project designed to support
          communities affected by emergencies and displacement in
          Lebanon. Our mission is to make essential humanitarian
          information accessible through a simple, responsive,
          and user-friendly digital platform.
        </p>

        <h2 className="mt-14 text-3xl font-bold text-slate-900">
          Our Core Values
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-10 w-10 text-red-600" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Official Information Sources
          </h2>

          <p className="mt-4 text-slate-600">
            CrisisConnect aims to prioritize information
            published by recognized organizations, including:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
            <li>Lebanese Ministry of Public Health</li>
            <li>Lebanese Red Cross</li>
            <li>Lebanese Civil Defense</li>
            <li>Official disaster management authorities</li>
          </ul>

          <p className="mt-5 text-sm text-slate-500">
            CrisisConnect is not officially affiliated with
            these organizations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <h2 className="text-2xl font-bold text-red-700">
            Important Safety Notice
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            CrisisConnect is an educational university project,
            not an official emergency response service.
            Information displayed during development may be
            simulated and must not be used for real-time
            emergency decisions. In immediate danger,
            contact the appropriate official emergency service.
          </p>
        </div>
      </section>

    </main>
  )
}

export default About
