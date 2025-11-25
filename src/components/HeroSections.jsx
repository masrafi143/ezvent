"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * HeroSections.jsx
 * Drop into: app/components/HeroSections.jsx
 * Usage: import HeroSections from '@/components/HeroSections'; then use <HeroSections />
 */

const sampleEvents = [
  {
    id: 1,
    title: "Tech Conference 2025",
    shortDesc: "Talks, workshops and networking on AI & Web.",
    date: "2025-12-15",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=60&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Music Festival",
    shortDesc: "Live performances, food stalls and open-air stage.",
    date: "2025-11-30",
    price: 20,
    image:
      "https://imgs.search.brave.com/hW1b0UvuIxTJSJmlTfQLridBYt3Vu9OIXCMZmaquaxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaXNmb2N1cy1j/b252ZW50aW9uLWhh/bGwtYmFja2dyb3Vu/ZC1idXNpbmVzXzM4/ODEwLTUxMTMuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
  },
  {
    id: 3,
    title: "Startup Meetup",
    shortDesc: "Pitch sessions, mentorship and investor talks.",
    date: "2025-10-10",
    price: 0,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=60&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Design Workshop",
    shortDesc: "Hands-on product & UX design workshop.",
    date: "2025-09-05",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cultural Night",
    shortDesc: "Local artists, plays & cultural performances.",
    date: "2025-08-20",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=60&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Cloud Summit",
    shortDesc: "Cloud-native patterns, security & scale.",
    date: "2025-07-18",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=60&auto=format&fit=crop",
  },
];

const features = [
  {
    id: 1,
    title: "Easy Event Creation",
    desc: "Create events quickly with a clean, guided form.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Ticketing & Payments",
    desc: "Integrate tickets and payments with a simple flow.",
    icon: "🎟️",
  },
  {
    id: 3,
    title: "Realtime Updates",
    desc: "Live countdowns, attendee updates and notifications.",
    icon: "⚡",
  },
  {
    id: 4,
    title: "Analytics",
    desc: "See attendance, revenue and engagement metrics.",
    icon: "📊",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Event Organizer",
    text: "Ezvent simplified our ticketing — setup in minutes and great UX for attendees.",
    avatar:
      "https://imgs.search.brave.com/I_1BJwbE6vE7lal1taASOccDfi8sFzNLnmgu8BPW5PA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjZy5jb20v/bWVkaWEvdHNfb3Jp/Zy8yNjYyMy53ZWJw",
  },
  {
    id: 2,
    name: "Rafi Khan",
    role: "Attendee",
    text: "Bought tickets quickly and got reminders — very smooth experience!",
    avatar:
      "https://imgs.search.brave.com/em62Q-eAXOR07hl_8h_36KzZq9X7sEK_EPYy7N_zNVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS93YWxscGFw/ZXJzL2Rlc2t0b3Av/MjAyNC8xMC9tcnVu/YWwtdGhha3VyXzc4/LmpwZw",
  },
];

function CTA({ onPrimary }) {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
      <Link
        href="/add-events"
        onClick={onPrimary}
        className="btn btn-primary px-6 py-3 text-white rounded-md shadow hover:scale-[1.02] transform transition focus:outline-none focus:ring-4 focus:ring-primary/40"
        aria-label="Create Event"
      >
        Create Event
      </Link>

      <Link
        href="/events"
        className="btn bg-secondary text-white px-4 py-2 rounded-md"
        aria-label="Explore events"
      >
        Explore Events
      </Link>
    </div>
  );
}

function Hero({ onPrimary }) {
  return (
    <section
      className="relative bg-gradient-to-r from-base-200 to-white overflow-hidden rounded-b-2xl"
      aria-label="Hero"
    >
      {/* Decorative background (optional) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(99,102,241,0.06), transparent 10%), radial-gradient(circle at 90% 80%, rgba(8,145,178,0.04), transparent 15%)",
        }}
      />
      <div className="md:flex md:items-center md:justify-between md:gap-8 md:py-28 py-16 md:px-16 px-6">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Organize — Promote — Host
            <span className="text-primary"> unforgettable events</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl">
            Build, manage and sell tickets for your events in a few clicks.
            Responsive pages, attendee management and simple analytics — all in
            one place.
          </p>

          <CTA onPrimary={onPrimary} />
          <div className="mt-6 text-sm text-gray-500">
            Trusted by small teams & creators
          </div>

          {/* small logos/brands */}
          <div className="mt-4 flex gap-4 items-center">
            <div className="h-8 w-20 bg-base-200 rounded flex items-center justify-center text-sm">
              Brand A
            </div>
            <div className="h-8 w-20 bg-base-200 rounded flex items-center justify-center text-sm">
              Brand B
            </div>
            <div className="h-8 w-20 bg-base-200 rounded flex items-center justify-center text-sm">
              Brand C
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 z-10">
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-100">
            <img
              src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1400&q=60&auto=format&fit=crop"
              alt="Hero background"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 bg-white">
              <div className="text-sm text-gray-500">Next meetup</div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <div className="font-semibold">React Meetup Dhaka</div>
                  <div className="text-xs text-gray-500">
                    Nov 29, 2025 • 6:00 PM
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">Free</div>
                  <div className="text-xs text-gray-400">RSVP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* container */}
    </section>
  );
}

function Features() {
  return (
    <section className="py-12 px-6 md:px-16">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Everything you need to run a successful event — from simple pages to
        ticketing and analytics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <article
            key={f.id}
            className="p-5 bg-base-100 rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition focus-within:ring-4 focus-within:ring-primary/20 outline-none"
            tabIndex={0}
            aria-labelledby={`feature-${f.id}`}
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 id={`feature-${f.id}`} className="font-semibold text-lg">
              {f.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            <div className="mt-4">
              <button className="btn btn-link p-0 text-primary">
                Learn more →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EventsGrid() {
  return (
    <section className="py-12 px-6 md:px-16 bg-base-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <p className="text-gray-600">
            Hand-picked events for you. Use the search to filter.
          </p>
        </div>

        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search events..."
            className="input input-bordered input-sm"
            aria-label="Search events"
          />
          <select className="select select-sm select-bordered">
            <option>All</option>
            <option>Free</option>
            <option>Paid</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleEvents.map((ev) => (
          <article
            key={ev.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition focus-within:ring-4 focus-within:ring-primary/20 outline-none"
            tabIndex={0}
            aria-labelledby={`event-${ev.id}`}
          >
            <div className="h-44 overflow-hidden">
              <img
                src={ev.image}
                alt={ev.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <h3
                id={`event-${ev.id}`}
                className="font-semibold text-lg truncate"
              >
                {ev.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 truncate">
                {ev.shortDesc}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">{ev.date}</div>
                <div className="text-sm font-semibold">
                  {ev.price ? `$${ev.price}` : "Free"}
                </div>
              </div>

              <div className="mt-3 flex gap-2">
                {/* <Link href={`/events/${ev.id}`} className="btn btn-ghost btn-sm">
                  Details
                </Link> */}
                <p className="btn bg-secondary text-white btn-sm">Details</p>
                <button className="btn btn-primary btn-sm">Buy Ticket</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold">What people say</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Real feedback from real users — short & honest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="p-6 bg-base-100 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>

              <p className="mt-4 text-gray-600">“{t.text}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-lg">
        <div className="md:flex md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Host your event with Ezvent</h3>
            <p className="mt-2 text-sm opacity-90 max-w-xl">
              Start for free — create an event page, share with your audience
              and sell tickets.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/events/add"
              className="btn btn-outline text-white border-white hover:bg-white/10"
            >
              Start hosting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSections() {
  const [demoState, setDemoState] = useState(0);

  const handleCreate = () => {
    // demo callback for CTA - replace with router push or modal open
    setDemoState((s) => s + 1);
    alert("You clicked Create Event — wire this to your Add Event page.");
  };

  return (
    <div className="space-y-8">
      <Hero />
      <Features />
      <EventsGrid />
      <Testimonials />
      <PromoBanner />
    </div>
  );
}
