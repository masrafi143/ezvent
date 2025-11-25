"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const demoBanner = "https://imgs.search.brave.com/_-M_ZoSdjdIUKAW1nUJN1fd0LyFvAcs1isqYwHBJy4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y2FuY2VsbGVkLWV2/ZW50cy1hbm5vdW5j/ZW1lbnQtY29uY2Vw/dF8yMy0yMTQ4NTYy/NDcyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA";

  useEffect(() => {
    fetch(`https://ezvent-server.onrender.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-red-500">Event not found!</p>
        <button onClick={() => router.back()} className="btn btn-primary mt-4">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <button onClick={() => router.back()} className="btn btn-outline mb-6">
        ← Back
      </button>

      {/* Banner Image */}
      <div className="mb-6">
        <img
          src={event.banner || demoBanner}
          alt={event.title}
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Event Title */}
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

      {/* Short Description */}
      {event.shortDescription && (
        <p className="text-gray-700 text-lg mb-4">{event.shortDescription}</p>
      )}

      {/* Full Description */}
      {event.fullDescription && (
        <p className="text-gray-600 mb-6 whitespace-pre-line">{event.fullDescription}</p>
      )}

      {/* Meta Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-medium mb-6">
        {event.price && <p>💰 Price: {event.price} ৳</p>}
        {event.date && <p>📅 Date: {event.date}</p>}
        {event.time && <p>⏰ Time: {event.time}</p>}
        {event.priority && <p>⚡ Priority: {event.priority}</p>}
        {event.location && <p>📍 Location: {event.location}</p>}
      </div>

      {/* Optional CTA */}
      <button
        onClick={() => alert("You can integrate ticket booking here!")}
        className="btn btn-primary"
      >
        Register / Buy Ticket
      </button>
    </div>
  );
}
