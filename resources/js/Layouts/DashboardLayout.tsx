import { useState, PropsWithChildren, ReactNode } from "react";
import Header from "@/Components/dashboard/header";
import Sidebar from "@/Components/dashboard/sidebar";
import { User } from "@/types";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/Components/themeProvider";
import { Head } from "@inertiajs/react";

export default function DashboardLayout({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <>
            <Head title="Dashboard" />

            {/* // <Suspense fallback={<Loader />} > */}
            <ThemeProvider defaultTheme="light" storageKey="theme">
                <Header user={user} />
                <div className="flex h-screen overflow-hidden">
                    <Sidebar
                        role={
                            user.role as
                                | "personal"
                                | "administrator"
                                | "organization"
                        }
                    />
                    <main className="w-full pt-16">
                        {children}
                        <Toaster expand={true} richColors />
                    </main>
                </div>
            </ThemeProvider>
            {/* // </Suspense> */}
        </>
    );
}
