import AuthenticatedLayout from "@/Layouts/DashboardLayout";
import { Activity, PageProps } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    CalendarCheck2,
    CalendarClock,
    CalendarDays,
    CreditCard,
} from "lucide-react";
import { useEffect } from "react";
import { formatDate } from "@/lib/formatter";
import { Badge } from "@/Components/ui/badge";
import { ScrollArea } from "@/Components/ui/scroll-area";

const BadgeStatus = ({ status }: { status: number }) => {
    return (
        <Badge
            className={`bg-${status === 1 ? "yellow" : status === 3 ? "red" : "green"
                }-300`}
        >
            {status === 1 ? "Menunggu" : status === 3 ? "Ditolak" : "Diterima"}
        </Badge>
    );
};

const ActivityCard = ({ activity }: { activity: Activity[] }) => {
    return activity.map((a) => {
        return (
            <Card key={a.id}>
                <CardHeader>
                    <CardTitle>{a.title}</CardTitle>
                    <CardDescription>
                        Penyelenggara : {a.publised_name}
                        <br />
                        Jadwal : {formatDate(a.schedule)}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between">
                        <img
                            src={`/images/${a.banner}`}
                            alt="banner"
                            className="max-w-48 max-h-48 rounded-lg"
                        />

                        <div className="flex gap-2 items-center">
                            <p className="text-lg">Status :</p>

                            <BadgeStatus status={a.status_daftar as number} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    });
};

export default function Dashboard({
    auth,
    activity,
    pending,
    accepted,
    users,
}: PageProps<{
    activity: Activity[];
    pending?: any;
    users?: any;
    accepted?: any;
}>) {
    const role = auth.user.role;

    useEffect(() => {
        console.log(activity);
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Selamat Datang Kembali {auth.user.name ?? ""} 👋
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {role === "personal"
                                        ? "Aktivitas yang diikuti"
                                        : "Total Aktivitas"}
                                </CardTitle>
                                <CalendarDays className="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {activity.length}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {role === "personal"
                                        ? "Total aktivitas yang anda ikuti"
                                        : "Total seluruh aktivitas"}
                                </p>
                            </CardContent>
                        </Card>
                        {role !== "organization" && (
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {role === "personal"
                                            ? "Menunggu Konfirmasi"
                                            : "Total Pengguna"}
                                    </CardTitle>
                                    <CalendarClock className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {role === "personal" ? pending : users}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {role === "personal"
                                            ? "Menunggu verifikasi dari penyelenggara"
                                            : "Jumlah seluruh pengguna terdaftar"}
                                    </p>
                                </CardContent>
                            </Card>
                        )}

                        {role === "personal" && (
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Diterima
                                    </CardTitle>
                                    <CalendarCheck2 className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {accepted}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Jumlah aktivitas diterima
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {role === "personal" && (
                        <ActivityCard activity={activity} />
                    )}
                </div>
            </ScrollArea>
        </AuthenticatedLayout>
    );
}
