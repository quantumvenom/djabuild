import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building2, Users2, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Excellence,<br />Delivering Trust
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            DJA Construction brings over two decades of expertise in delivering exceptional 
            construction projects across commercial, residential, and industrial sectors.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 text-lg">
                DJA Construction has been a trusted name in the construction industry since 2000. 
                Our commitment to quality, safety, and innovation has made us a leader in both 
                general contracting and specialized construction services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Client-Focused</h3>
                    <p className="text-gray-600">Your vision is our priority</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Assured</h3>
                    <p className="text-gray-600">Industry-leading standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                alt="Construction team reviewing plans"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden lg:block">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Heading
              title="Featured Projects"
              description="A showcase of our exceptional work and commitment to quality"
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's bring your construction vision to life. Contact us today for a consultation 
            and discover why leading businesses trust DJA Construction.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "Modern Office Complex",
    description: "A cutting-edge commercial space featuring sustainable design and state-of-the-art facilities",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e",
  },
  {
    title: "Luxury Residences",
    description: "Premium residential development with exceptional amenities and stunning architecture",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77",
  },
  {
    title: "Industrial Innovation",
    description: "Advanced manufacturing facility designed for optimal efficiency and productivity",
    image: "https://images.unsplash.com/photo-1531431057391-da7a1aabd412",
  },
];

const services = [
  {
    title: "General Contracting",
    description: "Full-service construction management and oversight for projects of any scale.",
    icon: function BuildingIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      );
    },
  },
  {
    title: "Construction Labor",
    description: "Skilled workforce solutions for construction projects of all sizes.",
    icon: function WorkersIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    },
  },
  {
    title: "Project Management",
    description: "Expert oversight ensuring projects are completed on time and within budget.",
    icon: function ClipboardIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="18" x="5" y="3" rx="2" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h4" />
        </svg>
      );
    },
  },
];