const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Ezvent</h2>
          <p className="text-sm leading-6">
            A modern event management platform to organize, manage, and track your events efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/events" className="hover:text-primary">Events</a></li>
            <li><a href="/add-events" className="hover:text-primary">Add Events</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Blog</a></li>
            <li><a href="#" className="hover:text-primary">Documentation</a></li>
            <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Get updates about new events and announcements.</p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
            />
            <button className="btn bg-primary text-white">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-base-300"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ezvent. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-primary">
            <i className="fa-brands fa-facebook text-xl"></i>
          </a>
          <a href="#" className="hover:text-primary">
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
          <a href="#" className="hover:text-primary">
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
