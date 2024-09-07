import AuthenticatedLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useEffect } from "react";

export default function Dashboard({ auth, activity }: PageProps) {
    useEffect(() => {
        console.log(activity);
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Dashboard" />

            <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <h2 className="text-3xl font-bold tracking-tight">
                    Selamat Datang Kembali {auth.user.name ?? ''} 👋
                </h2>
            </div>
        </AuthenticatedLayout>
    );
}
