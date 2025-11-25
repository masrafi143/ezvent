"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManageEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch all events
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://ezvent-server.onrender.com/events");
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete event
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`https://ezvent-server.onrender.com/events/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete event");

      alert("Event deleted successfully!");
      fetchEvents(); // refresh list
    } catch (error) {
      console.error(error);
      alert("Failed to delete event");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-gray-500">No events found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="card bg-base-100 shadow hover:shadow-xl transition-all rounded-xl"
          >
            {event.banner && (
              <figure>
                <img
                  src={event.banner}
                  alt={event.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              </figure>
            )}

            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {event.shortDescription || event.fullDescription}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                {event.date} — {event.time} | {event.priority || "Normal"}
              </p>

              <div className="card-actions justify-end mt-3 gap-2">
                <button
                  className="btn btn-sm bg-secondary text-white"
                  onClick={() => router.push(`/events/${event._id}`)}
                >
                  View
                </button>
                <button
                  className="btn btn-sm bg-red-500 text-white"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
