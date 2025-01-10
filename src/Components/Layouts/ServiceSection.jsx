import { SectionTitle } from "../Elements/SectionTitle";
import { CardService } from "../Fragments/CardService";

const services = [
  {
    id: 1,
    title: "Quality Menu",
    description: `All the menus we serve are menus that are guaranteed to be fresh and of good quality for you.`,
  },
  {
    id: 2,
    title: "Order Online",
    description: `You can order our menu online and let us deliver it to your destination.

`,
  },
  {
    id: 3,
    title: "Consultation",
    description: `Consult your complaints regarding our menu, we will always help and resolve them.

`,
  },
];

export const ServiceSection = () => {
  return (
    <section id="services" className="px-5 pt-24 lg:px-20">
      <SectionTitle>Services</SectionTitle>

      <div className="flex gap-3 flex-col md:flex-row">
        {services.map((service) => (
          <CardService
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};