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
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import CalendarInput from "@/Components/Calendar";

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

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            role: user.role,
            dob: user.dob,
            phone: user.phone,
            address: user.address,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("profile.update"), {
            onError: () => {
                console.log("error", e);
            },
            onSuccess: () => {
                console.log("success", e);
            }
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                    Update your account's profile information and email address.
                </CardDescription>
            </CardHeader>

            <form onSubmit={submit}>
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
                        <Label className="mb-1" htmlFor="dob">Tanggal Lahir</Label>
                        <CalendarInput
                            id="dob"
                            value={data.dob}
                            onSelect={(e) => setData("dob", e)}
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
                            type="number"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData("phone", parseInt(e.target.value))}
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
