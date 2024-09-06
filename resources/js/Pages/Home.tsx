import { Head } from "@inertiajs/react";
import { newActivity, PageProps } from "@/types";
import Navbar from "@/Components/home/Navbar";
import Hero from "@/Components/home/Hero";
import { ThemeProvider } from "@/Components/themeProvider";
import Features from "@/Components/home/Features";
import HomeCampaign from "@/Components/home/HomeCampaign";
import HomeBanner from "@/Components/home/HomeBanner";
import Footer from "@/Components/home/Footer";
import HomeLayout from "@/Layouts/HomeLayout";

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
    newActivity: newActivity[];
}>) {
    return (
        <HomeLayout user={auth.user}>
            <Hero />
            <Features />
            <HomeCampaign newActivity={newActivity} />
            <HomeBanner
                personal={personal}
                organization={organization}
                activity={activity}
            />
        </HomeLayout>
    );
}
