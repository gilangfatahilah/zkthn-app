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
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { Clock9 } from "lucide-react";

const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
];

const AlertInfo = ({ color, message, description }: { color: string, message: string, description: string }) => {
    return (
        <Alert className={`border-${color}-300`}>
            <Clock9 className="h-4 w-4" />
            <AlertTitle>{message}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { showToast, hideToast } = useToastStore();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (showToast) {
            toast.error('Mohon lengkapi data pribadi anda !');

            hideToast();
        }
    }, []);

    useEffect(() => {
        const successAlertShown = localStorage.getItem('successAlertShown');
        const errorAlertShown = localStorage.getItem('errorAlertShown');

        if (auth.user.status === 2 && !successAlertShown) {
            setShowAlert(true);
            localStorage.setItem('successAlertShown', "true")
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

                    {
                        auth.user.status === 1 ? (
                            <AlertInfo color="yellow" message="Menunggu Konfirmasi" description="Permintaan pergantian tipe akun anda sedang di proses." />
                        ) : auth.user.status === 2 ? (
                            <AlertInfo color="green" message="Berhasil" description="Tipe akun anda kini adalah Organisasi." />
                        ) : (
                            <AlertInfo color="red" message="Gagal" description="Permintaan pergantian tipe akun anda ditolak." />
                        )
                    }

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
