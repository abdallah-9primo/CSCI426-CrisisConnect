
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, AlertTriangle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const emergencyContacts = [
    { name: 'Lebanese Red Cross', number: '140' },
    { name: 'Civil Defense', number: '125' },
    { name: 'Fire Brigade', number: '175' },
    { name: 'Internal Security Forces', number: '112' },
  ]

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-red-700 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Emergency Directory & Contact
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-red-100">
          Find essential emergency contacts and reach out to our platform.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Emergency Hotlines
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.number}
              href={`tel:${contact.number}`}
              className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:shadow-lg"
            >
              <Phone className="mx-auto h-9 w-9 text-red-600" />

              <h3 className="mt-4 font-bold text-slate-900">
                {contact.name}
              </h3>

              <p className="mt-3 text-3xl font-bold text-red-600">
                {contact.number}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Contact CrisisConnect
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Use this demonstration form to explore how users
              could contact the CrisisConnect platform.
            </p>

            <div className="mt-8 space-y-5 text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" />
                <span>Lebanon</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-red-600" />
                <span>Contact form demonstration</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="shrink-0 text-amber-700" />
                <p className="text-sm leading-6 text-slate-700">
                  This form does not send emergency reports.
                  If you are in immediate danger, call an
                  official emergency service directly.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-slate-50 p-7 shadow-md"
          >
            <label
              htmlFor="name"
              className="mb-2 block font-semibold text-slate-700"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mb-5 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-red-500"
              placeholder="Enter your name"
            />

            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mb-5 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-red-500"
              placeholder="Enter your email"
            />

            <label
              htmlFor="message"
              className="mb-2 block font-semibold text-slate-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="mb-5 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-red-500"
              placeholder="Write your message"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
            >
              <Send size={18} />
              Submit Demo Form
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700"
              >
                Demo completed. Your message was not sent or stored.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact
