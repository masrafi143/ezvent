import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // 🔹 Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🔹 Email + Password Login
CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email", required: true },
    password: { label: "Password", type: "password", required: true },
  },

  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) return null;

    const res = await fetch("https://ezvent-server.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    if (!res.ok) return null;

    const user = await res.json();

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
    };
  },
})

  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
