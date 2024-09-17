import Footer from '@/Components/home/Footer';
import Navbar from '@/Components/home/Navbar';
import { ThemeProvider } from '@/Components/themeProvider';
import { User } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function HomeLayout({ user, children }: PropsWithChildren<{ user: User, }>) {
    return (
        <ThemeProvider defaultTheme="light" storageKey="theme">
            <Head title="Home" />
            <Navbar user={user} />
            {children}
            <Footer />
        </ThemeProvider>
    );
}
