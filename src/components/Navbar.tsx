// import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b w-full">
      {/* Left side - Logo and brand */}
      <div className="flex items-center gap-3">
        <img
          src="/google-meet-logo.svg"
          alt="Google Meet"
          className="h-8 w-8"
        />
        <span className="text-2xl text-gray-700">Meet</span>
      </div>

      {/* Right side - Time, icons and profile */}
      <div className="flex items-center gap-6">
        {/* Time */}
        <span className="text-base text-gray-600">6:14 PM • Mon, Mar 24</span>

        {/* Help icon */}
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        {/* Feedback icon */}
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>

        {/* Settings icon */}
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Apps menu icon */}
        <button className="p-3 hover:bg-gray-100 rounded-full">
          <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h.01M4 12h.01M4 18h.01M8 6h.01M8 12h.01M8 18h.01M12 6h.01M12 12h.01M12 18h.01" />
          </svg>
        </button>

        {/* Profile avatar */}
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-base">
          Om
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
