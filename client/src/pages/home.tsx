import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building2, Users2, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B1A1F] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD584] mb-6">
            Building Excellence,<br />Delivering Trust
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            DJA Construction brings over two decades of expertise in delivering exceptional 
            construction projects across commercial, residential, and industrial sectors.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-[#AE330A] hover:bg-[#AE330A]/90 text-white">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-[#FFD584] border-[#FFD584] hover:bg-[#FFD584]/10">
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
              <h2 className="text-3xl font-bold mb-6 text-[#1B1A1F]">Who We Are</h2>
              <p className="text-[#1B1A1F]/80 mb-6 text-lg">
                DJA Construction has been a trusted name in the construction industry since 2000. 
                Our commitment to quality, safety, and innovation has made us a leader in both 
                general contracting and specialized construction services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1B1A1F]">Expert Team</h3>
                    <p className="text-[#1B1A1F]/70">Skilled professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users2 className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1B1A1F]">Client-Focused</h3>
                    <p className="text-[#1B1A1F]/70">Your vision is our priority</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1B1A1F]">Quality Assured</h3>
                    <p className="text-[#1B1A1F]/70">Industry-leading standards</p>
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
              <div className="absolute -bottom-6 -right-6 bg-[#AE330A] text-white p-6 rounded-lg hidden lg:block">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-[#FFD584]/10">
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
              <Card key={project.title} className="overflow-hidden group bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B1A1F]">{project.title}</h3>
                  <p className="text-[#1B1A1F]/70 mb-4">{project.description}</p>
                  <div className="flex items-center text-[#AE330A] group-hover:gap-2 transition-all">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#AE330A] hover:bg-[#AE330A]/90 text-white">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#1B1A1F] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#FFD584]">Ready to Start Your Project?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's bring your construction vision to life. Contact us today for a consultation 
            and discover why leading businesses trust DJA Construction.
          </p>
          <Button asChild size="lg" className="bg-[#AE330A] hover:bg-[#AE330A]/90 text-white">
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