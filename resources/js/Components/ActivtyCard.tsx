import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Badge } from "./ui/badge";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Activity, User } from "@/types";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { Input } from "@/Components/ui/input";
import { MultiSelect } from "./MultiSelect"; // Import MultiSelect component
import { SiGooglegemini } from "react-icons/si";
import { Skeleton } from "./ui/skeleton";

interface ActivityProps {
    activities: Activity[];
    user: User;
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

const ActivityCard = ({ activities, user }: ActivityProps) => {
    const [searchTerm, setSearchTerm] = useState(""); // State for search
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Updated state for multi-category filter
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(false);

    // Handle search and filter
    const filteredActivities = activities.filter((activity) => {
        const matchesSearch = activity.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategories.length > 0
                ? selectedCategories.some((category) =>
                    JSON.parse(activity.category).includes(category)
                )
                : true;
        return matchesSearch && matchesCategory;
    });

    // Get all unique categories from activities for the multi-select
    const allCategories = [
        ...new Set(
            activities.flatMap((activity) => JSON.parse(activity.category))
        ),
    ];

    // Calculate total pages
    const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);

    // Paginate data based on current page
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

    const getRecommendation = async () => {
        try {
            setLoading(true);
            const response = await fetch('/recomactivity');
            const result = await response.json();

            const parsedResult = JSON.parse(result);
            console.log(parsedResult);

            setSelectedCategories(parsedResult);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
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

                        {/* MultiSelect for Category */}
                        <div className="w-1/3">

                            <MultiSelect
                                selected={selectedCategories}
                                setSelected={setSelectedCategories}
                                options={allCategories.map((category) => ({
                                    value: category,
                                    label: category,
                                }))}
                            />
                        </div>

                        {
                            user?.role === 'personal' && (
                                <Button onClick={getRecommendation} disabled={loading}>
                                    <SiGooglegemini className="mr-2" />
                                    {loading ? 'Mencari...' : 'Rekomendasi Aktivitas'}
                                </Button>
                            )
                        }
                    </div>
                </header>

                {/* Display activities with pagination */}
                <main className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
                    {loading ? Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Skeleton className="h-48 w-full" />
                            <div className="p-4 flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <Skeleton className="w-12 h-6" />
                                    <Skeleton className="w-12 h-6" />
                                </div>
                                <Skeleton className="w-3/4 h-8 mb-2" />
                                <Skeleton className="w-full h-4" />
                                <Skeleton className="w-5/6 h-4 mt-2" />
                                <div className="mt-4 flex flex-col gap-3">
                                    <div className="flex gap-1 items-center">
                                        <Skeleton className="w-5 h-5" />
                                        <Skeleton className="w-24 h-4" />
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Skeleton className="w-5 h-5" />
                                        <Skeleton className="w-32 h-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col gap-2 p-4">
                                <Skeleton className="w-full h-10" />
                            </div>
                        </div>
                    )) : paginatedActivities.map((activity, index) => (
                        <Card
                            key={activity.id}
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 200}
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
                                <div className="flex flex-wrap items-center gap-2 mb-2">
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
