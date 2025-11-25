"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function MyEventsPage() {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://ezvent-server.onrender.com/events-date-sorted?email=${session.user.email}`);
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [session?.user?.email]);

  if (loading) return <p className="text-center mt-10">Loading events…</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (events.length === 0) return <p className="text-center mt-10">No events found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Events</h1>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event._id} className="card p-4 shadow-md border rounded-md">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-gray-500 mt-2">
              Date: {new Date(event.date).toLocaleDateString()} | Time: {event.time || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
