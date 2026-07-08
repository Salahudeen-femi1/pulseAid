import { FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import type { NavItem } from "./interfaces";

export const navItems: NavItem[] = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        path: "/dashboard/overview",
        role: ["user", "admin"],
    },
    {
        name: "user Management",
        icon: MdDashboard,
        path: "/dashboard/userManagement",
        role: 'admin',
    },
    {
        name: 'Donation centers',
        icon: MdBloodtype,
        path: "/dashboard/donationCenters",
        role: ["users", "admin"]
    },
    {
        name: 'Profile',
        icon: CgProfile,
        path: "/dashboard/profile",
        role:"admin"
    },
    {
        name: 'Settings',
        icon: FiSettings,
        path: "/dashboard/settings",
        role: ["user", "admin"]
    },
    

]
