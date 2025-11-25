"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function AddEvent() {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    date: "",
    time: "",
    location: "",
    banner: "",
    price: "",
    priority: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.email) {
      alert("You must be logged in to add an event.");
      return;
    }

    try {
      // Add the logged-in user's email to the event data
      const eventWithUser = { ...formData, user_email: session.user.email };

      const res = await fetch("https://ezvent-server.onrender.com/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventWithUser),
      });

      if (!res.ok) throw new Error("Failed to add event");

      alert("🎉 Event added successfully!");

      setFormData({
        title: "",
        shortDescription: "",
        fullDescription: "",
        date: "",
        time: "",
        location: "",
        banner: "",
        price: "",
        priority: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to save event!");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Create New Event
        </h1>
        <p className="text-center text-base-content/70 mb-10 max-w-xl mx-auto">
          Fill up all the required event details carefully.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-base-100 shadow-xl rounded-2xl p-8 space-y-6"
        >
          {/* Form fields same as before */}
          {/* Title */}
          <div className="form-control">
            <label className="label font-semibold">Event Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="e.g. Tech Conference 2025"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Short Description */}
          <div className="form-control">
            <label className="label font-semibold">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              className="input input-bordered w-full"
              placeholder="1–2 line summary of the event"
              value={formData.shortDescription}
              onChange={handleChange}
              required
            />
          </div>

          {/* Full Description */}
          <div className="form-control">
            <label className="label font-semibold">Full Description</label>
            <textarea
              name="fullDescription"
              className="textarea textarea-bordered w-full h-32"
              placeholder="Write complete event details..."
              value={formData.fullDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-semibold">Date</label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Time</label>
              <input
                type="time"
                name="time"
                className="input input-bordered w-full"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Price + Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-semibold">Price (optional)</label>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full"
                placeholder="$20"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Priority</label>
              <select
                name="priority"
                className="select select-bordered w-full"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select priority</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              placeholder="e.g. Dhaka, Bangladesh"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Banner URL */}
          <div className="form-control">
            <label className="label font-semibold">Banner Image URL</label>
            <input
              type="text"
              name="banner"
              className="input input-bordered w-full"
              placeholder="https://example.com/banner.jpg"
              value={formData.banner}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn bg-primary text-white w-full text-lg mt-4"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
