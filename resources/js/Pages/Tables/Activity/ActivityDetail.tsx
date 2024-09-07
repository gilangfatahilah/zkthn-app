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
import { useState } from "react";
import { DataTable } from "../User/data-table";
import { activityColumns, columns } from "../User/columns";
import { Button } from "@/Components/ui/button";
import { Edit, Trash } from "lucide-react";
import { Link, router } from "@inertiajs/react";
import { AlertModal } from "@/Components/AlertModal";
import { toast } from "sonner";

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
    const [open, setOpen] = useState<boolean>(false)

    const onConfirm = () => {
        router.delete(`/dashboard/activity/${data.id}`);

        toast.success('Berhasil menghapus data aktivitas');
        setOpen(false);
    }

    return (
        <DashboardLayout user={auth.user}>
            <AlertModal
                isOpen={open}
                description={`Anda akan menghapus aktivitas  : ${data.title}`}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={false}
            />

            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="flex items-start justify-between">
                        <Heading
                            title="Detail Aktivitas"
                            description="Informasi detail aktivitas."
                        />

                        <div className="flex items-center gap-2">

                            <Link href={`/dashboard/activity/${data.id}/edit`}>
                                <Button>
                                    <Edit className="w-4 h-4 mr-2" />

                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={() => setOpen(true)} variant='destructive'>
                                <Trash className="w-4 h-4 mr-2" />

                                Hapus
                            </Button>
                        </div>
                    </div>

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
                                <DataTable columns={activityColumns} data={registrants} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
};

export default DashboardActivityDetail;
