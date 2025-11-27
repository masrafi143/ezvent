"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/add-events", label: "Add Events" },
    { href: "/manage-events", label: "Manage Events" },
    { href: "/my-events", label: "My Events" },
  ];

  return (
    <nav className="shadow-sm bg-base-100 sticky top-0 z-50">
      <div className="navbar md:px-15 md:mx-auto">

        {/* Left section */}
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "text-secondary font-bold" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl text-secondary">
            <img className="w-[150px]" src="/Ezvent.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-secondary" : "text-primary"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="navbar-end flex items-center gap-3">
          {!session ? (
            <div className="flex flex-col md:flex-row gap-2">
              <Link
                href='/login'
                className="btn bg-primary text-white hover:bg-secondary"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn bg-secondary text-white hover:bg-primary"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={session.user.image || "/default-user.png"}
                    alt="User"
                  />
                </div>
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-60"
              >
                <p className="font-bold text-center">{session.user.name}</p>
                <p className="text-center text-sm text-primary">
                  {session.user.email}
                </p>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="btn bg-primary text-white mt-3 w-fit mx-auto"
                >
                  Logout
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
