import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Building2, TrendingUp, Truck, Users, Shield } from "lucide-react";

const services = [
  {
    title: "General Contracting",
    description: "Expert management of construction projects from start to finish. We handle planning, coordination, and oversight of your entire project.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    title: "Construction Labor",
    description: "Skilled workforce solutions with experienced teams ready to tackle projects of any scale. Our workers are certified and safety-trained.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
  },
  {
    title: "Project Management",
    description: "Professional oversight ensuring your project stays on schedule and within budget while maintaining the highest quality standards.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
  },
  {
    title: "Heavy Equipment",
    description: "Modern fleet of construction equipment operated by experienced professionals for efficient project execution.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1517089152318-42ec560349c0"
  },
  {
    title: "Safety Management",
    description: "Comprehensive safety protocols and training to ensure workplace safety and regulatory compliance on every project.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9"
  },
  {
    title: "Specialized Construction",
    description: "Custom solutions for unique construction challenges, including industrial, commercial, and residential projects.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Heading
            title="Our Services"
            description="Comprehensive construction solutions tailored to your needs"
            centered
            className="text-white mb-8"
          />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
