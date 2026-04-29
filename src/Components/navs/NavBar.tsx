import React from "react";
import { assets } from "../../assets/assets";
import { sectionItems } from "../../lib/sectionItems";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="sticky z-999 top-0 left-0 w-full shadow-sm bg-white py-4 px-10 ">
      <div className="m-container flex items-center justify-between ">
        <div className="flex items-center gap-2 font-semibold">
          <span className='rounded-[10px] bg-primary px-3 py-2'>
            <img
              src={assets.logo}
              alt="Pulse Aid logo"
              className=" w-auto h-[20px] object-cover"
            />
          </span>
          <h3>Pulse Aid</h3>
        </div>

        <ul className="nav-items lg:flex hidden items-center gap-6 text-sm">
          {sectionItems.map((item, index) => (
            <a key={index} href={`#${item.path}`} className="transition-colors hover:text-primary ">
              {item.name}
            </a>
          ))}
        </ul>
        <div className="">
          <NavLink
            to={'/register'}
            className="bg-primary text-white min-w-25 px-4 h-10 hidden lg:flex items-center justify-center cursor-pointer rounded-[10px] transition-colors hover:opacity-90"
          >
            Register
          </NavLink>
          <button
            type="button"
            className="bg-primary text-light-tetiary w-10 h-10 lg:hidden flex items-center justify-center cursor-pointer rounded-md transition-colors hover:opacity-90"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
