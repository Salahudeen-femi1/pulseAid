import { FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import profileIcon from '../assets/profileIcon.png'

export const navItems = [
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
        icon: profileIcon,
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