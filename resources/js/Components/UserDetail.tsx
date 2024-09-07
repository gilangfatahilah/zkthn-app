import { Button } from "@/Components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { User } from "@/types";
import { formatDate } from "@/lib/formatter";

interface UserDetailProps {
    user: User;
    isOpen: boolean;
    onClose: () => void;
}

export default function UserDetail({ user, isOpen, onClose }: UserDetailProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
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
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
