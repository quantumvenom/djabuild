import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users2, CheckCircle, TrendingUp, Shield, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "General Contracting",
    description: [
      "Focused on $20M-$100M multifamily developments",
      "Single point of accountability structure",
      "Proven systems for budget and schedule control",
      "Established relationships with quality subcontractors"
    ],
    icon: Building2,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    title: "Pre-Construction",
    description: [
      "Early project feasibility and constructability analysis",
      "Value engineering and cost optimization",
      "Detailed risk assessment and mitigation planning",
      "Comprehensive bid package development"
    ],
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
  },
  {
    title: "Project Management",
    description: [
      "Dedicated project teams with multifamily expertise",
      "Transparent reporting and communication systems",
      "Proactive schedule and budget management",
      "Quality control throughout project lifecycle"
    ],
    icon: Users2,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
  },
  {
    title: "Self-Perform Work",
    description: [
      "In-house carpentry capabilities up to $50M",
      "Skilled labor force with proven track record",
      "Direct control over critical path activities",
      "Flexibility to maintain project momentum"
    ],
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#1B1A1F] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD584] mb-6">
            Construction Services That Deliver Results
          </h1>
          <p className="font-barlow text-lg text-white/90 max-w-2xl">
            Specialized in mid to large-scale multifamily developments, we bring proven 
            systems and dedicated teams to ensure project success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden border-none shadow-lg">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <service.icon className="h-8 w-8 text-[#AE330A]" />
                    <h3 className="font-chakra-petch text-2xl font-semibold text-[#1B1A1F]">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="font-barlow text-[#1B1A1F]/80 space-y-3 mb-6">
                    {service.description.map((point, i) => (
                      <li key={i} className="flex items-baseline gap-3">
                        <span className="text-[#AE330A] text-lg">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="bg-[#AE330A] hover:bg-[#AE330A]/90 text-white font-chakra-petch"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
