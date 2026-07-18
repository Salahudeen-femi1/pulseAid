import { MdDashboard } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import type { NavItem } from "./interfaces";

export const navItems: NavItem[] = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        path: "/dashboard/overview",
        // role: ["user", "admin"],
    },
    {
        name: "Dashboard",
        icon: MdDashboard,
        path: "/admin/overview",
        // role: 'admin',
    },
    {
        name: 'Donation centers',
        icon: MdBloodtype,
        path: "/dashboard/donationCenters",
        // role: ["user", "admin"]
    },
    {
        name: 'Profile',
        icon: CgProfile,
        path: "/dashboard/profile",
        // role:"admin"
    },
    

]
