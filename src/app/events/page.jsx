"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://ezvent-server.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-2">All Events</h1>
      <p className="text-gray-500 mb-6">
        Browse all upcoming events and explore details.
      </p>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        
        {/* Search Bar (UI Only) */}
        <input
          type="text"
          placeholder="Search events..."
          className="input input-bordered w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Category Filter (UI Only) */}
        <select
          className="select select-bordered w-full md:w-48"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="conference">Conference</option>
          <option value="music">Music</option>
          <option value="workshop">Workshop</option>
          <option value="meetup">Meetup</option>
        </select>

      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 6).map((event) => (
          <div key={event._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">

            {/* Image */}
            <figure>
              <img
                src={event?.banner || "https://imgs.search.brave.com/C9suDIMOEyTtzraPunE72iHUi3JWGV8qvTW4j-2U5kk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y2FuY2VsbGVkLWV2/ZW50cy1hbm5vdW5j/ZW1lbnRfMjMtMjE0/ODU1NDIzMC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"}
                alt={event?.title}
                className="h-48 w-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>

              {/* Short Description (ellipsis) */}
              <p className="text-sm text-gray-600 line-clamp-2">
                {event.description}
              </p>

              {/* Meta Info */}
              <p className="text-primary font-semibold mt-2">
                {event.price ? `Price: ${event.price} ৳` : "Free Event"}
              </p>

              <p className="text-xs text-gray-500">
                {event.date} — {event.time}
              </p>

              {/* Details Button */}
              <div className="card-actions justify-end mt-3">
                <Link href={`/events/${event._id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
