import Breadcrumbs from "@/Components/Breadcrumb";
import { Heading } from "@/Components/Heading";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Textarea } from "@/Components/ui/textarea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Activity, PageProps, User } from "@/types";
import { useEffect } from "react";
import { DataTable } from "../User/data-table";
import { columns } from "../User/columns";

const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Activity", href: "/dashboard/activity" },
    { label: "Detail" },
];

const DashboardActivityDetail = ({
    auth,
    activity,
    registrants
}: PageProps<{ activity: Activity[], registrants: User[] }>) => {
    const data = activity[0];

    useEffect(() => {
        console.log(registrants);
    }, []);

    return (
        <DashboardLayout user={auth.user}>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <Heading
                        title="Detail Aktivitas"
                        description="Informasi detail aktivitas."
                    />

                    <div className="w-full mx-auto mt-6 space-y-6">
                        {/* Card Container */}
                        <Card>
                            {/* Card Header */}
                            <CardHeader>
                                {/* Banner Image */}
                                <img
                                    src={`/images/${data.banner}`}
                                    alt={data.banner}
                                    className="object-cover w-full h-1/2 mb-4 rounded-lg"
                                />
                                <CardTitle className="text-primary text-4xl font-bold">
                                    {data.title}
                                </CardTitle>
                                <CardDescription className="w-full flex items-center justify-between text-base text-pretty">
                                    <span>Penyelenggara : {data.publised_name} </span>
                                    <span>Lokasi : {data.location} </span>
                                </CardDescription>
                            </CardHeader>

                            {/* Card Content */}
                            <CardContent className="grid gap-4 grid-cols-1 md:grid-cols-2">
                                {/* Categories */}
                                <div>
                                    <p className="text-sm mb-4">
                                        <strong>Categories:</strong>{" "}
                                    </p>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={JSON.parse(data.category).join(
                                            ", "
                                        )}
                                    />
                                </div>

                                {/* Schedule */}
                                <div>
                                    <p className="text-sm mb-4">
                                        <strong>Schedule:</strong>{" "}
                                    </p>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={new Date(
                                            data.schedule
                                        ).toLocaleString()}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm mb-4">
                                        <strong>Max Participants:</strong>{" "}
                                    </p>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={data.max}
                                    />
                                </div>

                                {/* Deadline */}
                                <div>
                                    <p className="text-sm mb-4">
                                        <strong>Registration Deadline:</strong>{" "}
                                    </p>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={new Date(
                                            data.deadline
                                        ).toLocaleString()}
                                    />
                                </div>

                                {/* Domicile */}
                                <div className="col-span-2">
                                    <p className="text-sm mb-4">
                                        <strong>Domicile:</strong>{" "}
                                    </p>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={data.domicile}
                                    />
                                </div>

                                {/* Description */}
                                <div className="col-span-2">
                                    <p className="text-sm mb-4">
                                        <strong>Description:</strong>{" "}
                                    </p>
                                    <Textarea name="" id="" readOnly>
                                        {data.description}
                                    </Textarea>
                                </div>

                                {/* Job Desk */}
                                <div className="col-span-2">
                                    <p className="text-sm mb-4">
                                        <strong>Jobdesk:</strong>{" "}
                                    </p>
                                    <Textarea name="" id="" readOnly>
                                        {data.jobdesk}
                                    </Textarea>
                                </div>

                                {/* Requirements */}
                                <div className="col-span-2">
                                    <p className="text-sm mb-4">
                                        <strong>Requirement:</strong>{" "}
                                    </p>
                                    <Textarea name="" id="" readOnly>
                                        {data.requirement}
                                    </Textarea>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-sm mb-4">
                                        <strong>Additional Information:</strong>{" "}
                                    </p>
                                    <Textarea name="" id="" readOnly>
                                        {data.addtional_information}
                                    </Textarea>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Daftar Peserta
                                </CardTitle>
                                <CardDescription>
                                    Informasi peserta untuk aktivitas "{data.title}"
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <DataTable columns={columns} data={registrants} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
};

export default DashboardActivityDetail;
