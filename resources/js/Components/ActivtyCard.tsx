import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Badge } from "./ui/badge";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Activity } from "@/types";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

interface ActivityProps {
    activities: Activity[];
}

const ITEMS_PER_PAGE = 12;

const formatDate = (date: any) => {
    const parsedISO = parseISO(date);
    return format(parsedISO, "dd MMMM yyyy", { locale: id });
};

const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
};

const ActivityCard = ({ activities }: ActivityProps) => {
    const [searchTerm, setSearchTerm] = useState(""); // State untuk search
    const [selectedCategory, setSelectedCategory] = useState(""); // State untuk filter kategori
    const [currentPage, setCurrentPage] = useState(1); // State untuk pagination

    // Handle pencarian dan filter
    const filteredActivities = activities.filter((activity) => {
        const matchesSearch = activity.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory
            ? JSON.parse(activity.category).includes(selectedCategory)
            : true;
        return matchesSearch && matchesCategory;
    });

    // Dapatkan semua kategori unik dari activities untuk dropdown
    const allCategories = [
        ...new Set(
            activities.flatMap((activity) => JSON.parse(activity.category))
        ),
    ];

    // Menghitung total halaman
    const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);

    // Menghitung data yang ditampilkan berdasarkan halaman saat ini
    const paginatedActivities = filteredActivities.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section>
            <div className="max-w-6xl mx-auto py-12 md:py-20">
                <header className="pb-8 md:pb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        {filteredActivities.length} Aktivitas membutuhkan
                        bantuan.
                    </h2>
                    <p className="text-xl text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        {/* Input Search */}
                        <Input
                            type="text"
                            placeholder="Cari aktivitas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-1/3"
                        />

                        {/* Select Category */}
                        <Select
                            onValueChange={(value) =>
                                setSelectedCategory(
                                    value === "all" ? "" : value
                                )
                            }
                            value={selectedCategory || "all"}
                        >
                            <SelectTrigger className="w-1/3">
                                <SelectValue placeholder="Pilih Kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    Semua Kategori
                                </SelectItem>
                                {allCategories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </header>

                {/* Menampilkan aktivitas dengan pagination */}
                <main className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
                    {paginatedActivities.map((activity) => (
                        <Card
                            key={activity.id}
                            className="relative overflow-hidden rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Link
                                href={`/activity${activity.id}`}
                                className="absolute inset-0 z-10"
                            >
                                <span className="sr-only">View campaign</span>
                            </Link>
                            <img
                                src={`images/${activity.banner}`}
                                alt={`${activity.banner}`}
                                width={500}
                                height={300}
                                className="h-48 w-full object-cover"
                                style={{
                                    aspectRatio: "500/300",
                                    objectFit: "cover",
                                }}
                            />
                            <CardContent className="p-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    {JSON.parse(activity.category).map(
                                        (c: string) => (
                                            <Badge
                                                key={c}
                                                variant={"secondary"}
                                            >
                                                {c}
                                            </Badge>
                                        )
                                    )}
                                </div>
                                <h2 className="text-xl font-bold">
                                    {activity.title}
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {truncateText(activity.description, 11)}
                                </p>
                                <div className="mt-4 flex flex-col gap-3">
                                    <div className="flex gap-1 items-center">
                                        <MdDateRange className="text-primary" />
                                        <p className="text-sm text-primary font-semibold">
                                            {formatDate(activity.schedule)}
                                        </p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <FaLocationDot className="text-primary" />
                                        <p className="text-sm text-primary font-semibold">
                                            {activity.location}, Indonesia
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button className="w-full">Selengkapnya</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </main>

                {/* Pagination Controls */}
                <div className="w-full flex justify-between items-center mt-12">
                    <Button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="w-1/4"
                    >
                        Sebelumnya
                    </Button>
                    <p className="text-sm text-gray-500">
                        Halaman {currentPage} dari {totalPages}
                    </p>
                    <Button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="w-1/4"
                    >
                        Selanjutnya
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ActivityCard;
