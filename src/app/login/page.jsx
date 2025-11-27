"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Credentials login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      alert("Login successful!");
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }

    setLoading(false);
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoading(true);

    const result = await signIn("google", { redirect: false });

    if (result?.ok) {
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

      alert("Logged in with Google!");
      router.push("/");
    } else {
      alert("Google login failed!");
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-96 p-6 bg-base-100 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn bg-primary text-white w-full"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border w-full"
        >
          Continue with Google
        </button>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <a href="/register" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
