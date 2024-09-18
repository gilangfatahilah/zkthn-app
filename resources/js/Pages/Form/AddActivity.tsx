import Breadcrumbs from "@/Components/Breadcrumb";
import { DatePicker } from "@/Components/Calendar";
import { Heading } from "@/Components/Heading";
import { InputTags } from "@/Components/InputTags";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Textarea } from "@/Components/ui/textarea";
import { useToastStore } from "@/hooks/useToastStore";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Activity, PageProps } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "sonner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddActivity = ({
    auth,
    activity,
}: PageProps & { activity?: Activity[] }) => {
    const breadcrumbItems = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Aktivitas", href: "/dashboard/activity" },
        { label: activity?.[0] ? "Ubah" : "Tambah" },
    ];

    const { setToast } = useToastStore();

    const { data, setData, put, post, processing, errors } = useForm({
        title: activity?.[0]?.title || "",
        location: activity?.[0]?.location || "",
        category: activity?.[0]?.category
            ? JSON.parse(activity[0].category)
            : [],
        schedule: activity?.[0]?.schedule || new Date(),
        deadline: activity?.[0]?.deadline || new Date(),
        max: activity?.[0]?.max || "",
        domicile: activity?.[0]?.domicile || "",
        description: activity?.[0]?.description || "",
        requirement: activity?.[0]?.requirement || "",
        jobdesk: activity?.[0]?.jobdesk || "",
        addtional_information: activity?.[0]?.addtional_information || "",
        banner: null,
    });

    // Mengubah nilai input teks dan textarea
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const key = e.target.id as keyof typeof data;
        setData(key, e.target.value);
    };

    // Menangani submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "banner") {
                if (value) {
                    formData.append(key, value instanceof File ? value : String(value));
                }
            } else {
                formData.append(key, String(value));
            }
        });

        if (activity?.[0]) {
            console.log([...formData.entries()]);

            post(route("activity.update", { id: activity[0].id }), {
                data: formData,
                onSuccess: () => {
                    setToast("diperbarui");
                    router.visit("/dashboard/activity");
                },
                onError: () => {
                    toast.error("Failed to update activity");
                },
                preserveScroll: true,
            });
        } else {
            console.log([...formData.entries()]);
            post(route("activity.store"), {
                data: formData,
                onSuccess: () => {
                    setToast("ditambahkan");
                    router.visit("/dashboard/activity");
                },
                onError: () => {
                    toast.error("Failed to create activity");
                },
                preserveScroll: true,
            });
        }
    };

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(
        activity?.[0]?.banner ? `/images/${activity[0].banner}` : null
    );

    const handleImgChange = (e: any) => {
        const selectedFile = e.target.files[0];

        setData("banner", selectedFile || null);

        if (selectedFile) {
            setFile(selectedFile);
            const previewUrl = URL.createObjectURL(selectedFile);
            // @ts-ignore
            setPreview(previewUrl);
        } else {
            setFile(null);
            setPreview(null);
        }
    };

    return (
        <DashboardLayout user={auth.user}>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <Heading
                        title="Aktivitas"
                        description="Informasi mengenai pengguna dan kelola pengguna."
                    />

                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardContent className="grid gap-4 pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="title">Judul</Label>
                                        <Input
                                            id="title"
                                            placeholder="Masukan Judul"
                                            value={data.title}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.title && (
                                            <div>{errors.title}</div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="location">Lokasi</Label>
                                        <Input
                                            id="location"
                                            type="text"
                                            placeholder="Masukan Lokasi"
                                            value={data.location}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.location && (
                                            <div>{errors.location}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="category">
                                            Kategori
                                        </Label>
                                        <InputTags
                                            id="category"
                                            value={data.category}
                                            onChange={(e) => {
                                                // @ts-ignore
                                                setData("category", e);
                                            }}
                                            placeholder="Masukan Kategori"
                                        />
                                        {errors.category && (
                                            <div>{errors.category}</div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="schedule">
                                            Tanggal Pelaksanaan
                                        </Label>
                                        <DatePicker
                                            value={data.schedule}
                                            onApply={(e) =>
                                                setData("schedule", e as Date)
                                            }
                                        />
                                        {errors.schedule && (
                                            <div>{errors.schedule}</div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="deadline">
                                            Batas Pendaftaran
                                        </Label>
                                        <DatePicker
                                            value={data.deadline}
                                            onApply={(e) =>
                                                setData("deadline", e as Date)
                                            }
                                        />
                                        {errors.deadline && (
                                            <div>{errors.deadline}</div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="max">
                                            Maksimal Relawan
                                        </Label>
                                        <Input
                                            id="max"
                                            placeholder="Masukan Maksimal Relawan"
                                            type="number"
                                            value={data.max}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.max && <div>{errors.max}</div>}
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="domicile">
                                            Domisili
                                        </Label>
                                        <Input
                                            id="domicile"
                                            placeholder="Masukan Domisili"
                                            type="text"
                                            value={data.domicile}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.domicile && (
                                            <div>{errors.domicile}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="description">
                                        Deskripsi
                                    </Label>
                                    <ReactQuill
                                        id="description"
                                        value={data.description}
                                        className="bg-background rounded"
                                        onChange={(value) =>
                                            setData("description", value)
                                        }
                                    />
                                    {errors.description && (
                                        <div>{errors.description}</div>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="jobdesk">Tugas</Label>
                                    <ReactQuill
                                        id="jobdesk"
                                        value={data.jobdesk}
                                        className="bg-background rounded"
                                        onChange={(value) =>
                                            setData("jobdesk", value)
                                        }
                                    />
                                    {errors.jobdesk && (
                                        <div>{errors.jobdesk}</div>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="requirement">
                                        Kriteria
                                    </Label>
                                    <ReactQuill
                                        id="requirement"
                                        value={data.requirement}
                                        className="bg-background rounded"
                                        onChange={(value) =>
                                            setData("requirement", value)
                                        }
                                    />
                                    {errors.requirement && (
                                        <div>{errors.requirement}</div>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="addtional_information">
                                        Informasi Tambahan
                                    </Label>
                                    <ReactQuill
                                        id="addtional_information"
                                        value={data.addtional_information}
                                        className="bg-background rounded"
                                        onChange={(value) =>
                                            setData("addtional_information", value)
                                        }
                                    />
                                    {errors.addtional_information && (
                                        <div>
                                            {errors.addtional_information}
                                        </div>
                                    )}
                                </div>

                                {/* Input file untuk banner */}
                                <div className="space-y-1">
                                    <Label htmlFor="banner">Banner</Label>
                                    <Input
                                        id="banner"
                                        type="file"
                                        accept=".png, .jpg, .svg, .webp, .jpeg"
                                        onChange={handleImgChange}
                                    />
                                    {preview && (
                                        <div className="mt-2">
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="h-40 w-auto border"
                                            />
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" disabled={processing}>
                                    {
                                        activity?.[0] ? "Perbarui" : "Tambah"
                                    }
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </ScrollArea>
        </DashboardLayout>
    );
};

export default AddActivity;
