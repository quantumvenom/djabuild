import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users2, CheckCircle, TrendingUp, Shield, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Carpentry Services",
    description: [
      "Specialized in mid-rise multifamily carpentry up to $50M",
      "In-house management teams with proven track record",
      "Consistent on-time delivery across New England",
      "Full-scope capability from rough framing to high-end finishes"
    ],
    icon: Building2,
    image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228"
  },
  {
    title: "General Contracting",
    description: [
      "Focused on $20M-$100M multifamily developments",
      "Strong history of delivering within budget targets",
      "Established record of meeting critical timelines",
      "Single point of accountability with transparent reporting"
    ],
    icon: Users2,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
  },
  {
    title: "Pre-Construction Services",
    description: [
      "Early cost certainty through detailed pre-construction analysis",
      "Proven value engineering expertise on complex projects",
      "Comprehensive risk assessment and mitigation planning",
      "Strong relationships with key subcontractors and suppliers"
    ],
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    title: "Project Management",
    description: [
      "Dedicated project teams with multifamily expertise",
      "Transparent reporting and communication systems",
      "Proactive schedule and budget management",
      "Quality control throughout project lifecycle"
    ],
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
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
                    asChild
                  >
                    <Link href="/contact#top">Learn More</Link>
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
