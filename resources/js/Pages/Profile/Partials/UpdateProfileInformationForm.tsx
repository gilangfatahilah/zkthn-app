import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { router, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler, useState } from "react";
import { PageProps } from "@/types";
import { DatePicker } from "@/Components/Calendar";
import { toast } from "sonner";
import { Textarea } from "@/Components/ui/textarea";
import { useToastStore } from "@/hooks/useToastStore";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { message } = useToastStore();

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            role: user.role,
            dob: user.dob,
            phone: user.phone,
            address: user.address,
            image: null,
            cv: null,
        });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const key = e.target.id as keyof typeof data;
        setData(key, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            // Menambahkan data form ke FormData, termasuk file jika ada
            formData.append(key, value instanceof File ? value : String(value));
        });

        post(route("profile.update"), {
            data: formData,
            onSuccess: () => {
                if (message === 'notComplete') {
                    window.history.back();

                    return;
                }

                toast.success('Berhasil memperbarui biodata diri');
            },
            onError: () => {
                toast.error("Gagal memperbarui biodata diri");
            },
            preserveScroll: true,
        });
    };

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(user.image ? `/images/${user.image}` : null);

    // Fungsi untuk menangani perubahan file
    const handleImgChange = (e: any) => {
        const selectedFile = e.target.files[0];

        setData("image", selectedFile || null);

        // Jika file dipilih, buat URL untuk pratinjau
        if (selectedFile) {
            setFile(selectedFile);
            const previewUrl = URL.createObjectURL(selectedFile);
            // @ts-ignore
            setPreview(previewUrl);
        } else {
            setFile(null);
            setPreview(null); // Hapus pratinjau jika tidak ada file
        }
    };

    const handleCvChange = (e: any) => {
        const file = e.target.files[0]

        setData("cv", file);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Informasi Profil</CardTitle>
                <CardDescription>
                    Perbarui informasi profil dan alamat email akun Anda.
                </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                    {/* Input file untuk image */}
                    <div>
                        {preview && (
                            <div className="mt-2">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="h-40 w-auto border"
                                />
                            </div>
                        )}
                        <Label htmlFor="image">Foto Profil</Label>
                        <Input
                            id="image"
                            type="file"
                            accept=".png, .jpg, .svg, .webp, .jpeg"
                            onChange={handleImgChange}
                        />
                    </div>

                    <div>
                        <Label htmlFor="name">Nama</Label>
                        <Input
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            autoFocus
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="text-sm mt-2 text-gray-800">
                                Your email address is unverified.
                                <button
                                    onClick={() => route("verification.send")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification
                                    email.
                                </button>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2 font-medium text-sm text-green-600">
                                    A new verification link has been sent to
                                    your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div>
                        <Label htmlFor="role">Tipe Akun</Label>
                        <Input
                            id="role"
                            className="mt-1 block w-full"
                            value={data.role}
                            onChange={(e) => setData("role", e.target.value)}
                            readOnly
                            autoFocus
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label className="mb-2" htmlFor="dob">
                            Tanggal Lahir
                        </Label>
                        <DatePicker
                            value={data.dob}
                            limit={true}
                            onApply={(e) => setData("dob", e as Date)}
                        />
                        {errors.dob && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.dob}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                            id="phone"
                            type="text"
                            pattern="\d*"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            required
                            autoFocus
                        />
                        {errors.phone && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="cv">CV</Label>
                        <div className="mt-1 block w-full">
                            {user.cv ? (
                                <>
                                    {/* Tampilkan link ke CV yang diunggah sebelumnya */}
                                    <a
                                        href={`/file/${user.cv}`}
                                        target="_blank"
                                        className="text-primary underline"
                                    >
                                        {user.cv}
                                    </a>

                                    {/* Opsi untuk mengubah CV */}
                                    <div className="mt-2">
                                        <Label htmlFor="cv-change">Ganti CV</Label>
                                        <Input
                                            id="cv-change"
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleCvChange}
                                        />
                                    </div>
                                </>
                            ) : (
                                <Input
                                    id="cv"
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleCvChange}
                                />
                            )}
                        </div>
                        {errors.cv && (
                            <p className="mt-2 text-sm text-red-600">{errors.cv}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="address">Alamat</Label>
                        <Textarea
                            id="address"
                            className="mt-1 block w-full"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            required
                            autoFocus
                        />
                        {errors.address && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.address}
                            </p>
                        )}
                    </div>

                </CardContent>
                <CardFooter className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-pretty">Saved.</p>
                    </Transition>
                </CardFooter>
            </form>
        </Card>
    );
}
