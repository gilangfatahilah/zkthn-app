import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { Link } from "@inertiajs/react";
import { ModeToggle } from "../ToggleMode";
import { User } from "@/types";

interface HeaderProps {
    user: User;
}

export default function Header({ user }: HeaderProps) {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-14 items-center justify-between px-4">
                <div className="hidden lg:block">
                    <Link href={"/"} target="_blank">
                        <img
                            className="w-16 h-16 fill-current text-primary"
                            src="/images/logo.png"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className={cn("block lg:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <UserNav user={user} />
                    <ModeToggle />
                </div>
            </nav>
        </div>
    );
}
