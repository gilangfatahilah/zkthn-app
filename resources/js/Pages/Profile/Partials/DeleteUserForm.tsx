import { useRef, useState, FormEventHandler } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/Components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardDescription,
    CardTitle,
} from "@/Components/ui/card";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                toast.success("Account deleted successfully");
            },
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Hapus Akun</CardTitle>
                    <CardDescription>
                        Setelah akun anda dihapus, semua sumber daya dan dan
                        datanya akan dihapus secara permanen. Sebelum menghapus
                        akun Anda akun anda, silakan unduh data atau informasi
                        apa pun yang yang ingin anda simpan.
                    </CardDescription>
                </CardHeader>

                <CardFooter className="flex">
                    <Button variant="destructive" onClick={confirmUserDeletion}>
                        Hapus Akun
                    </Button>
                </CardFooter>
            </Card>

            <Dialog open={confirmingUserDeletion} onOpenChange={closeModal}>
                <DialogContent>
                    <form onSubmit={deleteUser}>
                        <DialogHeader>
                            <DialogTitle>Apakah Anda Yakin?</DialogTitle>
                            <DialogDescription>
                                Setelah akun anda dihapus, semua sumber daya dan
                                dan datanya akan dihapus secara permanen.
                                Sebelum menghapus akun Anda akun anda, silakan
                                unduh data atau informasi apa pun yang yang
                                ingin anda simpan.
                            </DialogDescription>
                        </DialogHeader>

                        <CardContent className="mt-6">
                            <Label className="mb-4" htmlFor="password">
                                Kata Sandi
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Kata Sandi"
                                ref={passwordInput}
                            />
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.password}
                                </p>
                            )}
                        </CardContent>

                        <DialogFooter>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={closeModal}
                            >
                                Batal
                            </Button>
                            <Button
                                type="submit"
                                variant="destructive"
                                disabled={processing}
                            >
                                Hapus Akun
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}
