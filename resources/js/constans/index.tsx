import { FaHandHoldingHeart } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { NavItem } from "@/types/NavItem";

export const features = [
    {
        id: 1,
        icon: <FaHandHoldingHeart className="w-12 h-12 text-white/90" />,
        title: "Jadi Relawan",
        description:
            "Bergabunglah sebagai relawan dan berikan kontribusi terbaik dengan dukungan teknologi mutakhir dan fitur yang memudahkan.",
    },
    {
        id: 2,
        icon: <GiThreeFriends className="w-12 h-12 text-white/90" />,
        title: "Mencari Relawan",
        description:
            "Temukan relawan yang sesuai dengan kebutuhan organisasi Anda, dengan desain platform yang responsif untuk akses mudah di berbagai perangkat.",
    },
    {
        id: 3,
        icon: <FaHandsHelping className="w-12 h-12 text-white/90" />,
        title: "Kolaborasi Organisasi",
        description:
            "Bekerja sama dengan berbagai organisasi melalui platform yang terstruktur, bersih, dan mudah dipelihara untuk memperluas dampak sosial.",
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

export const getNavItem = (
    type: "personal" | "organization" | "administrator"
): NavItem[] => {
    switch (type) {
        case "personal":
            return [
                {
                    title: "Beranda",
                    href: "/dashboard",
                    icon: "dashboard",
                    label: "Dashboard",
                },
                {
                    title: "Aktivitas",
                    href: "/activity",
                    icon: "calendar",
                    label: "Activity",
                },
            ];
        case "organization":
            return [
                {
                    title: "Beranda",
                    href: "/dashboard",
                    icon: "dashboard",
                    label: "Dashboard",
                },
                {
                    title: "Aktivitas",
                    href: "/activity",
                    icon: "calendar",
                    label: "Activity",
                },
            ];
        case "administrator":
            return [
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
                    label: "User",
                },
                {
                    title: "Aktivitas",
                    href: "/dashboard/activity",
                    icon: "calendar",
                    label: "Activity",
                },
            ];
    }
};