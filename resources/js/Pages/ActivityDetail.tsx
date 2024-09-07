import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { Activity, PageProps, User } from "@/types";
import HomeLayout from "@/Layouts/HomeLayout";
import { useEffect } from "react";
import { router } from "@inertiajs/react";
import { useToastStore } from "@/hooks/useToastStore";

interface ActivityDetailProps {
    auth: PageProps["auth"];
    activity: Activity[];
}

const ActivityDetailPage = ({ auth, activity }: ActivityDetailProps) => {
    const { setToast } = useToastStore();

    useEffect(() => {
        console.log(auth.user);
    }, []);

    const formatDate = (date: any) => {
        const parsedISO = parseISO(date);
        return format(parsedISO, "dd MMMM yyyy", { locale: id });
    };

    const onApplyActivity = () => {
        const isDataComplete = (data: any) => {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    if (key === "image") {
                        continue;
                    }
                    if (
                        data[key] === null ||
                        data[key] === undefined ||
                        data[key] === ""
                    ) {
                        return false;
                    }
                }
            }
            return true;
        };

        const user = auth.user;

        if (user === null) {
            router.visit("/login");

            return;
        }

        if (user && !isDataComplete(user)) {
            setToast("Data is not complete");

            router.visit("/profile");

            return;
        }

        if (user && isDataComplete(user)) {
            // do something

            return;
        }
    };

    return (
        <HomeLayout user={auth.user}>
            <section className="max-w-6xl mx-auto py-12 md:py-20 space-y-6">
                {/* Header Section */}
                <div className="flex justify-between gap-8 items-start">
                    <div className="space-y-6 w-1/2">
                        {/* Image */}

                        <img
                            src="https://picsum.photos/200/300"
                            alt={activity[0].title}
                            className="w-full h-auto object-cover rounded-lg max-h-[400px]"
                        />

                        {/* Organization and Details */}
                        <div className="flex justify-between items-center">
                            <p className="text-md font-medium text-primary">
                                Bersama : {activity[0].publised_name}
                            </p>
                            <p className="text-md font-medium">
                                {activity[0].max} Relawan
                            </p>
                        </div>
                    </div>

                    {/* Details Section */}
                    <Card className="w-1/2 p-2 space-y-6">
                        {/* Header */}
                        <CardHeader>
                            {/* Event Title */}
                            <h1 className="text-3xl font-bold">
                                {activity[0].title}
                            </h1>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {JSON.parse(activity[0].category).map(
                                    (category: string) => (
                                        <Badge
                                            key={category}
                                            variant="outline"
                                            className="text-sm"
                                        >
                                            {category}
                                        </Badge>
                                    )
                                )}
                            </div>
                        </CardHeader>

                        {/* Content */}
                        <CardContent className="space-y-4">
                            {/* Event Info */}
                            <div className="space-y-4">
                                {/* Date */}
                                <div className="flex items-center space-x-2">
                                    <FaCalendarAlt className="text-gray-500 dark:text-white" />
                                    <p className="text-gray-700 dark:text-white">
                                        <strong>Jadwal Event:</strong>{" "}
                                        {formatDate(activity[0].schedule)}
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-gray-500 dark:text-white" />
                                    <p className="text-gray-700 dark:text-white">
                                        <strong>Lokasi:</strong>{" "}
                                        {activity[0].location}
                                    </p>
                                </div>

                                {/* Registration Deadline */}
                                <div className="flex items-center space-x-2">
                                    <MdEventAvailable className="text-red-500" />
                                    <p className="text-red-500">
                                        <strong>Batas Registrasi:</strong>{" "}
                                        {formatDate(activity[0].deadline)}
                                    </p>
                                </div>
                            </div>
                        </CardContent>

                        {/* Footer */}
                        <CardFooter className="flex flex-col space-y-4">
                            <Button
                                onClick={onApplyActivity}
                                className="bg-primary w-full"
                            >
                                Jadi Relawan
                            </Button>
                            {/* <Button variant="outline" className="w-full">Kontak Organisasi</Button> */}
                        </CardFooter>
                    </Card>
                </div>

                <div className="flex-col space-y-4">
                    {/* Description */}
                    <div className="bg-baackround p-4 rounded-lg">
                        <p className="text-gray-600 dark:text-white">
                            {activity[0].description}
                        </p>
                    </div>

                    {/* Activity[0] Details */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary">
                            Detail Aktivitas
                        </h2>
                        <Card className="mt-2">
                            <CardHeader>
                                <h3 className="text-lg font-bold">
                                    Persyaratan
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p>{activity[0].requirement}</p>
                            </CardContent>
                        </Card>
                        <Card className="mt-2">
                            <CardHeader>
                                <h3 className="text-lg font-bold">
                                    Deskripsi Pekerjaan
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p>{activity[0].jobdesk}</p>
                            </CardContent>
                        </Card>
                        <Card className="mt-2">
                            <CardHeader>
                                <h3 className="text-lg font-bold">Domisili</h3>
                            </CardHeader>
                            <CardContent>
                                <p>{activity[0].domicile}, Indonesia</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
};

export default ActivityDetailPage;
