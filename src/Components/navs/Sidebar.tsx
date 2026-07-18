import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FiLogOut } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import { navItems } from "../../lib/navItems";
import { IoChevronDown } from "react-icons/io5";
import Modal from "../modal/Modal";
import { FaCaretLeft } from "react-icons/fa6";
import { getInitials } from "../../helper/utilitty";
import { useUser } from "../../Context/userContext";

const Sidebar = ({
  setIsOpen,
  isExpanded,
  setIsExpanded,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isExpanded: boolean;
}) => {
  const { user,  logout } = useUser();
  const location = useLocation();
  const currentPath = location.pathname;
  // const currentRole = (role ?? user?.role ?? "user").toLowerCase();

  // const matchesRole = (allowedRoles: string | string[]) => {
  //   const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  //   return roles.some((itemRole) => itemRole.toLowerCase() === currentRole);
  // };

  const [openMenu, setOpenMenu] = useState<string | null>(() => {
    const activeItem = navItems.find((item) =>
      item.children?.some((sub) => currentPath.includes(sub.path)),
    );
    return activeItem ? activeItem.name : null;
  });

  const [showLogOutModal, setShowLogOutModal] = useState<boolean>(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`
      bg-primary md:border-r border-primary/10 h-full ps-2 py-4 lg:pt-2 pt-2.5 flex flex-col
      w-full
      ${isExpanded ? "" : ""}
    `}
    >
      <div className="flex items-center justify-between gap-4 px-2 lg:pt-0 pt-2 pb-2 border-b border-stroke me-2">
        <img
          src={isExpanded ? assets.image : assets.image}
          alt="Pulse Aid logo"
          className={`h-auto object-cover ${isExpanded ? "w-1/2" : "mx-auto w-full"} cursor-pointer`}
          onClick={() => setIsExpanded(!isExpanded)}
        />
        {isExpanded && (
          <button
            className="bg-fadedPrimary  w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => setIsExpanded(false)}
          >
            <FaCaretLeft size={20} className="text-primary"/>
          </button>
        )}
      </div>
      <ul
        className={`${isExpanded ? "ps-4" : "ps-2"} lg:mt-4 mt-4 flex flex-col gap-3 h-4/5 overflow-y-hidden no-scrollbar pb-6`}
      >
        {navItems
          // .filter((navitem) => matchesRole(navitem.role))
          .map((item, index) => {
            const isOpen = openMenu === item.name;
            const isActiveByPath = currentPath === item.path;

            return (
              <div className="" key={index}>
                {!item.children ? (
                  <div className="flex gap-3">
                    <NavLink
                      to={item.path!}
                      end
                      title={item.name}
                      className={({ isActive }) => `
                      w-[calc(100%-16px)] flex items-center ${isExpanded ? "" : "justify-center"} gap-2 text-white border-0 transition-all duration-300 hover:font-semibold hover:text-primary hover:bg-fadedPrimary px-4 py-3 rounded-md cursor-pointer text-xs 
                      ${
                        isActive
                          ? "bg-primary text-white font-semibold border border-primary/2"
                          : ""
                      }
                    `}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>
                        <item.icon size={14} />
                      </span>
                      {isExpanded && <span>{item.name}</span>}
                    </NavLink>
                    {isActiveByPath && (
                      <div className="w-1 rounded-l-full bg-dark-secondary"></div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="flex gap-3">
                      <div
                        className={`w-[calc(100%-16px)] ${isExpanded ? "justify-between" : "justify-center"} flex items-center gap-3 text-black px-4 py-3 hover:bg-fadedPrimary hover:text-primary hover:font-semibold cursor-pointer rounded-md text-xs ${
                          isOpen &&
                          "bg-primary text-white font-semibold border border-primary/2"
                        }`}
                        title={item.name}
                        onClick={() => setOpenMenu(isOpen ? null : item.name)}
                      >
                        <div
                          className={`flex items-center w-full h-full ${isExpanded ? "" : "justify-center"} gap-2`}
                        >
                          <span>
                            <item.icon size={14} />
                          </span>
                          {isExpanded && <span>{item.name}</span>}
                        </div>
                        {isExpanded && (
                          <IoChevronDown
                            className={`transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                      {isActiveByPath && isOpen && (
                        <div className="w-1 rounded-l-full bg-dark-secondary dark:bg-light-secondary"></div>
                      )}
                    </div>

                    {isOpen && (
                      <div
                        className={`border-l border-primary/10 dark:border-light-tetiary/10 lg:pl-2 ${isExpanded ? "ml-6" : "ml-2"} flex flex-col gap-2 pt-3`}
                      >
                        {item.children.map((sub, idx) => (
                          <NavLink
                            key={idx}
                            to={sub.path}
                            end
                            title={sub.name}
                            className={({ isActive }) =>
                              `flex items-center gap-2 text-black dark:text-light-tetiary hover:text-primary hover:font-semibold px-2 py-1 text-xs ${
                                isActive ? "text-primary font-semibold" : ""
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            <span>
                              <sub.icon size={14} />
                            </span>
                            {isExpanded && sub.name}
                            {isActiveByPath && isOpen && (
                              <div className="w-1 rounded-l-full bg-dark-secondary dark:bg-light-secondary"></div>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
      </ul>

      <ul className="px-2 flex flex-col gap-1 justify-end mt-auto me-2 pt-2 border-t border-primary/10 dark:border-light-tetiary/10">
        <li>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 text-white transition-all duration-300 px-4 py-3 rounded-md border-none cursor-pointer text-xs hover:bg-fadedPrimary hover:font-semibold hover:text-primary${
                isActive
                  ? "bg-light-tetiary dark:bg-dark-tetiary text-primary font-semibold border border-primary/5"
                  : ""
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <MdSettings size={14} />
            {isExpanded && <span>Settings</span>}
          </NavLink>
        </li>

        <li
          className={`flex items-center justify-between ${isExpanded ? "px-3" : "px-0"} py-1.5 rounded-lg transition-all duration-300 hover:bg-light-tetiary group hover:dark:bg-dark-tetiary text-black dark:text-light-tetiary hover:font-semibold cursor-pointer`}
        >
          <div
            className={`flex items-center gap-2 text-xs ${isExpanded ? "w-3/4" : "w-full justify-center"}`}
          >
            <span className="w-8 h-8 group-hover:bg-light-secondary bg-white text-primary flex items-center justify-center font-extrabold rounded-full">
              {getInitials(
                user?.name?.split(" ")?.[0] ?? "C",
                user?.name?.split(" ")?.[1] ?? "N",
              )}
            </span>
            {isExpanded && (
              <span className="font-semibold w-[calc(100%-42px)] line-clamp-1">
                {user?.name}
              </span>
            )}
          </div>
          {isExpanded && (
            <button
              onClick={() => setShowLogOutModal(true)}
              className="text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-xs"
            >
              <FiLogOut size={16} />
            </button>
          )}
        </li>
      </ul>

      {showLogOutModal && (
        <Modal onClose={() => setShowLogOutModal(false)}>
          <div className="flex items-center flex-col">
            <img src={assets.logOutGif} alt="Logout GiF" />
            <h3 className="font-semibold text-xl text-red-700">
              Are you sure you want to logout?
            </h3>
            <div className="flex w-full mt-8 items-center gap-6">
              <button
                type="button"
                onClick={handleLogout}
                className="bg-secondary text-sm rounded-md font-medium border border-primary/10 w-1/2 h-12 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="bg-red-500 text-sm rounded-md font-medium text-white w-1/2 h-12 cursor-pointer"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
