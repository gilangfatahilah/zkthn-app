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
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler, useState } from "react";
import { PageProps } from "@/types";
import { DatePicker } from "@/Components/Calendar";

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

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            role: user.role,
            dob: user.dob,
            phone: user.phone,
            address: user.address,
            cv: null, // Menambahkan file CV ke state form
        });

    const [cvFile, setCvFile] = useState<File | null>(null); // Menyimpan file CV

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(); // Menggunakan FormData untuk menangani file
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("role", data.role);
        formData.append("dob", data.dob.toString());
        formData.append("phone", data.phone);
        formData.append("address", data.address);

        if (cvFile) {
            formData.append("cv", cvFile); // Tambahkan file CV ke FormData
        }

        // Menggunakan for-of untuk melihat isi FormData
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        post(route("profile.update"), {
            data: formData,
            onError: () => {
                console.log("error", e);
            },
            onSuccess: () => {
                console.log("success", e);
            },
            preserveScroll: true, // Agar scroll tidak reset setelah submit
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Informasi Profil</CardTitle>
                <CardDescription>
                    Perbarui informasi profil dan alamat email akun Anda.
                </CardDescription>
            </CardHeader>

            <form onSubmit={submit}>
                @csrf
                <CardContent className="space-y-6">
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
                            onApply={(e) => setData('dob', e as Date)}
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
                            pattern="\d*"  // Membatasi input agar hanya angka yang bisa dimasukkan
                            className="mt-1 block w-full"
                            value={data.phone}  // Pastikan 'data.phone' disimpan sebagai string
                            onChange={(e) => setData("phone", e.target.value)}  // Set sebagai string
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
                        <Label htmlFor="address">Alamat</Label>
                        <Input
                            id="address"
                            type="text"
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

                    <div>
                        <Label htmlFor="cv">CV</Label>
                        <Input
                            id="cv"
                            type="file"
                            className="mt-1 block w-full"
                            accept=".pdf"
                            onChange={(e) => setCvFile(e.target.files?.[0] || null)} // Simpan file yang dipilih
                        />
                        {errors.cv && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.cv}
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
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </CardFooter>
            </form>
        </Card>
    );
}
