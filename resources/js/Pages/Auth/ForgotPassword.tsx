import GuestLayout from "@/Layouts/HomeLayout";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Link } from "@inertiajs/react";

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/Components/ui/card";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <>
            <Head title="Forgot Password" />

            {/* Wrapper yang membuat card ke tengah */}
            <div className="min-h-screen flex justify-center items-center">
                <Card className="max-w-md w-full mx-auto">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">
                            Lupa Kata Sandi?
                        </h2>
                    </CardHeader>

                    <CardContent>
                        <div className="mb-4 text-sm text-gray-600">
                            Lupa kata sandi Anda? Tidak masalah. Cukup beri tahu
                            kami alamat email Anda dan kami akan mengirimkan
                            kata sandi melalui email yang memungkinkan Anda
                            memilih kata sandi baru.
                        </div>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </form>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between">
                        <Link
                            href="/login"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Kembali
                        </Link>

                        <Button
                            className="ms-4"
                            disabled={processing}
                            onClick={submit}
                        >
                            Kirim Email Pemulihan
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
