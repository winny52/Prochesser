import React from 'react';

const ClassesFooter =()=> {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/social" className="hover:underline">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">Newsletter Signup</h3>
            <p className="mb-4">Stay Updated on Chess News</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md w-full sm:w-auto sm:flex-grow text-gray-800"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} ProChesser Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ClassesFooter;
