
import {
  House,
  MapPin,
  Droplets,
  Bot,
  Phone,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

function Services() {
  const services = [
    {
      icon: House,
      title: 'Shelter Directory',
      description:
        'Find temporary shelters and relief centers across Lebanon. Search by location and explore available facilities.',
      color: 'text-green-700',
      background: 'bg-green-50',
    },
    {
      icon: MapPin,
      title: 'Safety Information',
      description:
        'Access safety guidance and information about emergency situations from trusted official sources.',
      color: 'text-red-600',
      background: 'bg-red-50',
    },
    {
      icon: Droplets,
      title: 'Blood Donation',
      description:
        'Learn how to contact recognized blood donation organizations and find reliable donation information.',
      color: 'text-red-600',
      background: 'bg-red-50',
    },
    {
      icon: Bot,
      title: 'AI Crisis Assistant',
      description:
        'Get general emergency preparedness information and guidance through an AI-powered assistant.',
      color: 'text-blue-600',
      background: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Emergency Directory',
      description:
        'Quickly access important Lebanese emergency telephone numbers and essential service contacts.',
      color: 'text-green-700',
      background: 'bg-green-50',
    },
    {
      icon: ShieldAlert,
      title: 'Emergency Preparedness',
      description:
        'Explore simple safety checklists to help families prepare for emergencies and potential evacuation.',
      color: 'text-orange-600',
      background: 'bg-orange-50',
    },
  ]

  const evacuationSteps = [
    'Follow verified instructions issued by official emergency authorities.',
    'If evacuation is advised, leave through a route confirmed safe by authorities.',
    'Take essential medication, identification documents, water, and a charged phone if readily available.',
    'Keep family members together and assist children and people requiring additional support.',
    'Avoid damaged buildings, suspicious objects, and areas with active danger.',
    'Once safe, contact relatives and follow official updates.',
  ]

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-red-700 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Our Services
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-red-100">
          Essential emergency information and humanitarian
          resources designed to support communities in Lebanon.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore Our Features
        </h2>

        <p className="mt-3 text-slate-600">
          Discover the tools and services planned for CrisisConnect.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.background}`}
                >
                  <Icon className={`h-8 w-8 ${service.color}`} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-600">
                  <span>Explore CrisisConnect</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-9 w-9 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">
              Emergency Evacuation Guidance
            </h2>
          </div>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            In dangerous situations, always prioritize official
            emergency instructions. The following checklist
            provides general preparedness guidance.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {evacuationSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-600" />

                <div>
                  <span className="text-sm font-bold text-red-600">
                    STEP {index + 1}
                  </span>

                  <p className="mt-2 leading-7 text-slate-700">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <h2 className="text-xl font-bold text-red-700">
            Important Safety Disclaimer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            CrisisConnect is an educational university project.
            Its information is not a live emergency alert system.
            Do not rely on this website to determine whether a
            location or evacuation route is safe. Always follow
            official emergency authorities.
          </p>
        </div>
      </section>

    </main>
  )
}

export default Services
