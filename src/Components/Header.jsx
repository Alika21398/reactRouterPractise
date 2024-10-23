import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="px-44 py-5">
        <ul className="flex justify-between items-center">
          <li className="text-2xl">
            <Link to="/">yourLogo</Link>
          </li>

          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-xl font-semibold ${isActive? "text-red-500" : "text-black"} `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                
                  `text-xl font-semibold ${isActive ? "text-red-500" : "text-black"} hover:text-red-500 `
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive}) =>
                  `text-xl font-semibold ${isActive ? "text-red-500" : "text-black"} `
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="gitHub"
                className={({ isActive}) =>
                  `text-xl font-semibold ${isActive ? "text-red-500" : "text-black"} `
                }>GitHub</NavLink>
            </li>

            <li>
              <NavLink to="user" className={({isActive})=>`${isActive ? "text-red-500" : "text-black"} text-xl font-semibold`}>Users</NavLink>
            </li>
          </ul>

          <li>LogIn</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
