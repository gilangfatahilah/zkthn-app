import { useState, PropsWithChildren, ReactNode } from 'react';
import Header from '@/Components/dashboard/header';
import Sidebar from '@/Components/dashboard/sidebar';
import { User } from '@/types';

export default function DashboardLayout({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    return (
        <>
            {/* // <Suspense fallback={<Loader />} > */}
            <Header user={user} />
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <main className="w-full pt-16">{children}</main>
            </div>
            {/* // </Suspense> */}
        </>
    );
}
