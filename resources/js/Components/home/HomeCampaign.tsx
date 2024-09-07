import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Badge } from "../ui/badge";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { newActivity } from "@/types";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale"; // Import locale ID for Indonesian

interface NewActivityProps {
    newActivity: newActivity[];
}

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

const HomeCampaign = ({ newActivity }: NewActivityProps) => {

    return (
        <section>
            <div className="max-w-6xl mx-auto py-12 md:py-20">
                <header className="pb-12 md:pb-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            The majority our customers do not understand their
                            workflows.
                        </h2>
                        <p className="text-xl text-gray-400">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>
                </header>
                <main className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
                    {newActivity.map((activity, index) => (
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

                <div className="w-full flex justify-center items-center mt-12">
                    <Button size={"lg"} className="w-1/4">
                        <Link href="/activity">Lihat Aktivitas Lain</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HomeCampaign;
