import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Badge } from "./ui/badge";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const campaigns = [
  {
    id: 1,
    title: "Innovative Eco-Friendly Product",
    category: ["Health", "Social", "Religion"],
    description: "Help us bring our sustainable product to market and make a difference.",
    imageSrc: "https://picsum.photos/200/300",
    amountRaised: "$25,000",
    daysLeft: "14"
  },
  // Tambahkan data kampanye lainnya di sini
  {
    id: 2,
    title: "New Solar Energy Project",
    category: ["Health", "Social", "Religion"],
    description: "Support our initiative to provide affordable solar energy to rural areas.",
    imageSrc: "https://picsum.photos/200/300",
    amountRaised: "$40,000",
    daysLeft: "20"
  },
  {
    id: 3,
    title: "Innovative Water Purification System",
    category: ["Health", "Social", "Religion"],
    description: "Join us in developing a low-cost water purification system.",
    imageSrc: "https://picsum.photos/200/300",
    amountRaised: "$30,000",
    daysLeft: "18"
  },
  {
    id: 4,
    title: "Innovative Water Purification System",
    category: ["Health", "Social", "Religion"],
    description: "Join us in developing a low-cost water purification system.",
    imageSrc: "https://picsum.photos/200/300",
    amountRaised: "$30,000",
    daysLeft: "18"
  },
  {
    id: 5,
    title: "Innovative Water Purification System",
    category: ["Health", "Social", "Religion"],
    description: "Join us in developing a low-cost water purification system.",
    imageSrc: "https://picsum.photos/200/300",
    amountRaised: "$30,000",
    daysLeft: "18"
  },
  {
    id: 6,
    title: "Innovative Water Purification System",
    category: ["Health", "Social", "Religion"],
    description: "Join us in developing a low-cost water purification system.",
    imageSrc: "https://picsum.photos/200/300",
    amountRaised: "$30,000",
    daysLeft: "18"
  }
];

const HomeCampaign = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        <header className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              The majority our customers do not understand their workflows.
            </h2>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </header>
        <main className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className="relative overflow-hidden rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View campaign</span>
              </Link>
              <img
                src={campaign.imageSrc}
                alt="Campaign Image"
                width={500}
                height={300}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "500/300", objectFit: "cover" }}
              />
              <CardContent className="p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {campaign.category.map((c) => (
                    <Badge key={c} variant={"secondary"}>
                      {c}
                    </Badge>
                  ))}
                </div>

                <h2 className="text-xl font-bold">{campaign.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {campaign.description}
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex gap-1 items-center">
                    <MdDateRange className="text-primary" />

                    <p className="text-sm text-primary font-semibold">
                      12 Agustus 2023
                    </p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <FaLocationDot className="text-primary" />

                    <p className="text-sm text-primary font-semibold">
                      Semarang, Indonesia
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
          <Button size={'lg'} className="w-1/4">
            Lihat Aktivitas Lain
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCampaign;
