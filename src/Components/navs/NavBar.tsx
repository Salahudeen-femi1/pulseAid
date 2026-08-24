import React from "react";
import { assets } from "../../assets/assets";
import { sectionItems } from "../../lib/sectionItems";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="rounded-[10px] bg-primary px-3 py-2 shadow-sm">
            <img
              src={assets.logo}
              alt="Pulse Aid logo"
              className="h-[20px] w-auto object-cover"
            />
          </span>
          <h3 className="text-lg">Pulse Aid</h3>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {sectionItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.path}`}
              className="transition-colors duration-200 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <NavLink
            to="/login"
            className="rounded-[10px] border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="rounded-[10px] bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Register
          </NavLink>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setSidebar(true)}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white transition hover:opacity-90"
            aria-label="Open menu"
          >
            <FaBars size={16} />
          </button>

          {sidebar && (
            <div className="absolute right-4 top-4 z-50 w-[260px] rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800">Menu</span>
                <button
                  onClick={() => setSidebar(false)}
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <FaXmark size={16} />
                </button>
              </div>

              <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                {sectionItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.path}`}
                    onClick={() => setSidebar(false)}
                    className="rounded-md px-2 py-2 transition hover:bg-slate-50 hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-2">
                <NavLink
                  to="/login"
                  onClick={() => setSidebar(false)}
                  className="rounded-[10px] border border-primary px-4 py-2 text-center text-sm font-medium text-primary"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setSidebar(false)}
                  className="rounded-[10px] bg-primary px-4 py-2 text-center text-sm font-medium text-white"
                >
                  Register
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
