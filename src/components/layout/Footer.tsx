import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-xl font-bold">Pick the call, it is Taxroof</h2>
          <p>
            Simplify your Return Filing process with our user-friendly platform.
          </p>
          <p>
            <strong>Taxroof Consultancy Private Limited</strong> <br />
            Opp Police Guest House <br />
            Near KEB Office, Mulgund Naka Road, <br />
            Gadag-Betageri, Karnataka 582101
          </p>
          <p>
            <strong>Contact:</strong> +91-80972 62227 <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@taxroof.in" className="text-blue-400 hover:text-blue-600">
              contact@taxroof.in
            </a>
          </p>
          <p className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500">
              Facebook
            </a>
            <a href="https://instagram.com" className="hover:text-pink-400">
              Instagram
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              Twitter
            </a>
          </p>
        </div>

        {/* Right Section (Google Maps iframe) */}
        <div className="lg:w-1/2">
          <iframe
            title="Taxroof Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.376260103662!2d75.61716727456645!3d15.41400928926878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8db2e18f4af67%3A0x9d75b6a393fb1188!2sKEB%20Office%2C%20Mulgund%20Naka%20Rd%2C%20Gadag-Betageri%2C%20Karnataka%20582101!5e0!3m2!1sen!2sin!4v1689332030403!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, aspectRatio: '1 / 1' }}
            loading="lazy"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>© Copyright Taxroof. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
