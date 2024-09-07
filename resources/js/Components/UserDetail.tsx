import { Button } from "@/Components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { User } from "@/types";
import { formatDate } from "@/lib/formatter";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Clock9 } from "lucide-react";
import { AlertModal } from "./AlertModal";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import { ScrollArea } from "./ui/scroll-area";

interface UserDetailProps {
    user: User;
    isOpen: boolean;
    onClose: () => void;
}


export default function UserDetail({ user, isOpen, onClose }: UserDetailProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [actionType, setActionType] = useState<'accept' | 'decline'>('accept');

    const handleSubmit = () => {
        const path = window.location.pathname;
        const activityId = path.match(/\d+/)?.[0];

        const body = {
            id: user.register_status === 1 ? activityId : user.id,
            status: actionType === 'accept' ? 2 : 3
        }

        user.register_status === 1 ? router.post('/handleapplier', body) : router.post('/handleaccount', body);

        toast.success('Berhasil mengkonfirmasi user')
        setOpen(false);
    }

    return (
        <>
            <AlertModal isOpen={open} variant="primary" description="Aksi ini tidak dapat diulangi?" onClose={() => setOpen(false)} onConfirm={handleSubmit} loading={false} />
            <ScrollArea className="h-full">

                <Dialog open={isOpen} onOpenChange={onClose}>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle></DialogTitle>
                        </DialogHeader>
                        {
                            (user.status === 1 && !user.register_status) && (
                                <Alert className={`border-yellow-300`}>
                                    <Clock9 className="h-4 w-4" />
                                    <AlertTitle>Perlu Verifikasi</AlertTitle>
                                    <AlertDescription>
                                        Pengguna {user.name} ingin mengubah tipe akun menjadi organisasi.
                                    </AlertDescription>
                                </Alert>
                            )
                        }
                        <div className="bg-muted rounded-md p-4 sm:p-6">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src={`/images/${user.image}`}
                                            alt="user image"
                                        />
                                        <AvatarFallback>
                                            {user.name.charAt(0).toLocaleUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <div className="text-lg font-medium">
                                            {user.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {user.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6">
                            <div className="grid gap-4 sm:grid-cols-2 space-y-4">
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Email
                                    </div>
                                    <div>{user.email}</div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Nomor Telepon
                                    </div>
                                    <div>{user.phone ?? "-"}</div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Tanggal Lahir
                                    </div>
                                    <div>{formatDate(user.dob) ?? "-"}</div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Jenis Kelamin
                                    </div>
                                    <div>{user.gender}</div>
                                </div>
                                <div className="col-span-2">
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Alamat
                                    </div>
                                    <div>{user.address ?? "-"}</div>
                                </div>
                                <div className="col-span-2">
                                    <div className="text-sm font-medium text-muted-foreground">
                                        CV
                                    </div>
                                    {
                                        user.cv ? (

                                            <a
                                                href={`/file/${user.cv}`}
                                                target="_blank"
                                                className="text-pretty underline"
                                            >
                                                {user.cv ?? '-'}
                                            </a>
                                        ) : (
                                            <p> - </p>
                                        )
                                    }
                                </div>


                                {
                                    (user.status === 1 || user.register_status === 1) && (

                                        <div className="col-span-2 flex-col gap-2 space-y-2">
                                            <Button className="w-full" onClick={() => {
                                                setActionType('accept');
                                                setOpen(true);
                                            }}>Verifikasi</Button>
                                            <Button className="w-full" variant={'destructive'}
                                                onClick={() => {
                                                    setActionType('decline');
                                                    setOpen(true);
                                                }}>Tolak</Button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

            </ScrollArea>


        </>
    );
}
