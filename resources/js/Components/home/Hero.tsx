import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoThumb from "../../../../public/thumb.png";
import ModalVideo from "./ModalVideo";
import { Button } from "../ui/button";
import { Link } from "@inertiajs/react";

export default function Hero() {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    }, []);

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Hero content */}
                <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1
                            className="text-6xl text-primary/70 font-bold mb-4"
                            data-aos="fade-up"
                        >
                            Aksi Nyata Bersama kami
                        </h1>
                        <p
                            className="text-xl text-gray-400 mb-8"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Gerakan kolaboratif yang mendorong partisipasi aktif
                            dalam memberikan kontribusi langsung kepada
                            masyarakat
                        </p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:gap-4 sm:justify-center">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <Button
                                    size={"lg"}
                                    className="w-full mb-2 text-md tracking-wide"
                                >
                                    <Link href="/login">Mulai </Link>
                                </Button>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <Button
                                    size={"lg"}
                                    className="w-full text-md tracking-wide text-gray-400"
                                    variant={"outline"}
                                >
                                    <Link href="/activity">Selengkapnya </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <ModalVideo
                        thumb={VideoThumb}
                        thumbWidth={1024}
                        thumbHeight={576}
                        thumbAlt="Modal video thumbnail"
                        video="/videos/video1.mp4"
                        videoWidth={1920}
                        videoHeight={1080}
                    />
                </div>
            </div>
        </section>
    );
}