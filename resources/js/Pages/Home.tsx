import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/home/Navbar";
import Hero from "@/Components/home/Hero";
import { ThemeProvider } from "@/Components/themeProvider";
import Features from "@/Components/home/Features";
import HomeCampaign from "@/Components/home/HomeCampaign";
import HomeBanner from "@/Components/home/HomeBanner";
import Footer from "@/Components/home/Footer";
import { useEffect } from "react";

export default function Welcome({
    auth,
    personal,
    organization,
    activity,
    newActivity,
}: PageProps<{
    personal: number;
    organization: number;
    activity: number;
    newActivity: any;
}>) {
    useEffect(() => {
        console.log(newActivity);
    }, []);
    return (
        <ThemeProvider defaultTheme="light" storageKey="theme">
            <Head title="My App" />
            <Navbar user={auth.user} />
            <Hero />
            <Features />
            <HomeCampaign />
            <HomeBanner
                personal={personal}
                organization={organization}
                activity={activity}
            />
            <Footer />
        </ThemeProvider>
    );
}
