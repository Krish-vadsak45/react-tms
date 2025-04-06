import { React, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="shadow sticky z-50 top-0 min-w-3">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="../src/assets/logo.png"
              className="mr-3 h-12 scale-300 pt-1.5"
              alt="Logo"
              loading="lazy"
            />
          </Link>
          <div
            ref={dropdownRef}
            className="flex items-center lg:order-2 bg-black justify-center mt-2 relative"
          >
            {/* Log in Button */}
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setShowOptions(!showOptions);
              }}
              className="relative cursor-pointer px-6 py-2 rounded-lg min-h-[2.5em] min-w-[3.5em] flex items-center justify-center text-[18px] font-semibold tracking-wide bg-black text-white border-2 border-gray-700 shadow-[0px_0px_10px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_15px_rgba(0,255,255,0.8)] hover:border-cyan-400 active:scale-95 active:shadow-[0px_0px_20px_rgba(0,255,255,1)] active:brightness-125"
            >
              Log in
            </NavLink>

            {/* Dropdown Options */}
            <div
              className={`absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50 transition-all duration-300 ${
                showOptions
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-90 invisible"
              }`}
            >
              <NavLink
                to="/Login/passenger"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-all"
                onClick={(e) => {
                  setShowOptions(!showOptions);
                }}
              >
                Passenger
              </NavLink>
              <NavLink
                to="/login/captain"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-all"
                onClick={(e) => {
                  setShowOptions(!showOptions);
                }}
              >
                Captain
              </NavLink>
            </div>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/Safety"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  Safety
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Blogs"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  Blogs
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Emergency"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  Emergency
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Feedback"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-50"
                    } relative no-underline transition-all duration-300 hover:text-[#fdfcfb] hover:scale-105 after:absolute after:bottom-[-10px] after:left-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#005AA7] after:to-[#FFFDE4] after:rounded-md after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-normal`
                  }
                >
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
