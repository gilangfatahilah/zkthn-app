import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import { ThemeProvider } from '@/Components/themeProvider';
import Features from '@/Components/Features';
import HomeCampaign from '@/Components/HomeCampaign';
import HomeBanner from '@/Components/HomeBanner';
import Footer from '@/Components/Footer';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <ThemeProvider defaultTheme='light' storageKey='theme'>
            <Head title="My App" />
            <Navbar user={auth.user} />
            <Hero />
            <Features />
            <HomeCampaign />
            <HomeBanner />
            <Footer />
        </ThemeProvider>
    );
}
