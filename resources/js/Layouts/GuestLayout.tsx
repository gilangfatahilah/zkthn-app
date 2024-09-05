import Navbar from '@/Components/home/Navbar';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="flex flex-col min-h-screen overflow-hidden">
                {children}
            </div>
        </div>
    );
}
