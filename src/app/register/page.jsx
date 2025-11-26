"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    photo: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      // 1. Save user in your backend (MongoDB)
      const res = await fetch("https://ezvent-server.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          image: user.photo,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed!");
        setLoading(false);
        return;
      }

      // 2. Optionally create credentials login via NextAuth (if using credentials provider)
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      alert("Registration successful!");
      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="card w-full max-w-md p-6 bg-base-100 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-4">Create Account</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={user.photo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            value={user.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full"
            value={user.address}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={user.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn bg-primary text-white w-full">
            {loading ? "Registering…" : "Register"}
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Signup */}
        <button
          onClick={async () => {
            setLoading(true);
            const result = await signIn("google", { redirect: false });

            if (result?.ok) {
              // Save Google user in MongoDB
              const sessionRes = await fetch("/api/auth/session");
              const session = await sessionRes.json();

              if (session?.user) {
                await fetch("https://ezvent-server.onrender.com/users", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: session.user.name,
                    email: session.user.email,
                    image: session.user.image,
                  }),
                });
              }
              alert("Google account registered!");
              router.push("/");
            }
            setLoading(false);
          }}
          className="btn bg-white text-black border w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Continue with Google
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="link link-primary">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
