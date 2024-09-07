import AuthenticatedLayout from "@/Layouts/DashboardLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { ScrollArea } from "@/Components/ui/scroll-area";
import Breadcrumbs from "@/Components/Breadcrumb";
import { Heading } from "@/Components/Heading";
import { useEffect } from "react";
import { useToastStore } from "@/hooks/useToastStore";
import { toast } from "sonner";
import ChangeAccount from "./Partials/ChangeAccount";

const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
];

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { showToast, hideToast } = useToastStore();

    useEffect(() => {
        if (showToast) {
            toast.error('Mohon lengkapi data pribadi anda !');

            hideToast();
        }
    }, [])

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile" />

            <ScrollArea className="h-full py-12">
                <div className="max-w-7xl overflow-y-auto mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Breadcrumbs items={breadcrumbItems} />
                    <Heading
                        title="Profil"
                        description="Kelola informasi pribadi anda di sini."
                    />

                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />

                    <UpdatePasswordForm />

                    {
                        auth.user.role === 'personal' && (
                            <ChangeAccount />
                        )
                    }

                    <DeleteUserForm />
                </div>
            </ScrollArea>
        </AuthenticatedLayout>
    );
}
