import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types";
import { Checkbox } from "@/Components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Badge } from "@/Components/ui/badge";
import { CellAction } from "./cell-action";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "image",
        header: "Foto ",
        cell: ({ row }) => {
            return (
                <Avatar>
                    <AvatarImage
                        src={`/images/${row.original.image as string}`}
                        alt={row.original.name as string}
                    />
                    <AvatarFallback>
                        {" "}
                        {row.original.name?.substring(0, 1).toUpperCase()}{" "}
                    </AvatarFallback>
                </Avatar>
            );
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "role",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tipe Akun
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const str = row.original.role;

            return <Badge>{str.charAt(0).toUpperCase() + str.slice(1)}</Badge>;
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const str = row.original.status === 1 ? 'Perlu Verifikasi' : 'Aktif';


            if (str === 'Perlu Verifikasi') {
                return <Badge className="bg-yellow-300">{str}</Badge>;
            }
            return <Badge>{str}</Badge>;
        },
    },
    {
        id: "actions",
        header: "Opsi",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
