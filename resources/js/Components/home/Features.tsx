import { features } from "@/constans";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold mb-4">
              Baznas Action
            </h2>
            <p className="text-xl text-gray-400">
              Sebuah wadah kolaboratif dalam memberikan kontribusi
              langsung kepada masyarakat melalui program kerja
              Baznas Indoneisa.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div className="rounded-full mb-2 p-4 bg-primary/70">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-base text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}