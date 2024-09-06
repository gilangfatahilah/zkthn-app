import Breadcrumbs from "@/Components/Breadcrumb";
import { Heading } from "@/Components/Heading";
import { InputTags } from "@/Components/InputTags";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Textarea } from "@/Components/ui/textarea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { PageProps } from "@/types";
import { useState } from "react";

const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Activity", href: "/dashboard/activity" },
    { label: "Create" },
];

const AddActivity = ({ auth }: PageProps) => {
    const [values, setValues] = useState<string[]>([]);

    return (
        <DashboardLayout user={auth.user}>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <Heading
                        title="Aktivitas"
                        description="Informasi mengenai pengguna dan kelola pengguna."
                    />

                    <Card>
                        <CardContent className="grid gap-4 pt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="title">Judul</Label>
                                    <Input
                                        id="title"
                                        placeholder="Masukan Judul"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="location">Lokasi</Label>
                                    <Input
                                        id="loication"
                                        type="text"
                                        placeholder="Masukan Lokasi"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="category">Kategori</Label>
                                    <InputTags
                                        id="category"
                                        value={values}
                                        onChange={setValues}
                                        placeholder="Masukan Kategori"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="schedule">
                                        Tanggal Pelaksanaan
                                    </Label>
                                    <Input
                                        id="schedule"
                                        placeholder="Masukan Tanggal Pelaksanaan"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="schedule">
                                        Batas Pendaftaran
                                    </Label>
                                    <Input
                                        id="schedule"
                                        placeholder="Masukan Tanggal Pelaksanaan"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="max">
                                        Maksimal Relawan
                                    </Label>
                                    <Input
                                        id="max"
                                        placeholder="Masukan Maksimal Relawan"
                                        type="number"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="domicile">Domisili</Label>
                                    <Input
                                        id="domicile"
                                        placeholder="Masukan Domisili"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Masukan Deskripsi"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="jobdesk">Tugas</Label>
                                <Textarea
                                    id="jobdesk"
                                    placeholder="Masukan Tugas"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="addtional_information">
                                    Informasi Tambahan
                                </Label>
                                <Textarea
                                    id="addtional_information"
                                    placeholder="Masukan Informasi Tambahan"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit">Create Client</Button>
                        </CardFooter>
                    </Card>
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
};

export default AddActivity;
