import { FaHandHoldingHeart } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { NavItem } from "@/types/NavItem";

export const features = [
    {
        id: 1,
        icon: <FaHandHoldingHeart className="w-12 h-12 text-white/90" />,
        title: "High Quality",
        description:
            "Experience the best quality service with cutting-edge technology and top-notch features.",
    },
    {
        id: 2,
        icon: <GiThreeFriends className="w-12 h-12 text-white/90" />,
        title: "Responsive Design",
        description:
            "Our designs are fully responsive, ensuring seamless user experience across all devices.",
    },
    {
        id: 3,
        icon: <FaHandsHelping className="w-12 h-12 text-white/90" />,
        title: "Clean Code",
        description:
            "We write clean, well-documented code to ensure maintainability and ease of use.",
    },
];

export const navItems: NavItem[] = [
    {
        title: "Beranda",
        href: "/dashboard",
        icon: "dashboard",
        label: "Dashboard",
    },
    {
        title: "Pengguna",
        href: "/dashboard/user",
        icon: "user",
        label: "user",
    },
    {
        title: "Aktivitas",
        href: "/dashboard/activity",
        icon: "calendar",
        label: "Activity",
    },
];
