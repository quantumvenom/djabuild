import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Building2, Users2, CheckCircle, ChevronLeft, ChevronRight, Settings, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const services = [
    {
      image: "/photos/framing3.jpg",
      title: "Carpentry Services",
      description: [
        "Specialized in up to mid-rise multifamily carpentry",
        "In-house management teams with proven track record",
        "Consistent on-time delivery across New England",
        "Full-scope capability from rough framing to high-end finishes"
      ]
    },
    {
      image: "photos/GC.jpg",
      title: "General Contracting",
      description: [
        "Our team has 25 years and counting of experience in the construction industry",
        "Strong history of delivering within budget targets",
        "Established record of meeting critical timelines",
        "Single point of accountability with transparent reporting"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Pre-Construction Services",
      description: [
        "Early cost certainty through detailed pre-construction analysis",
        "Proven value engineering expertise on complex projects",
        "Comprehensive risk assessment and mitigation planning",
        "Strong relationships with key subcontractors and suppliers"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#1B1A1F] pt-32 pb-20 px-4 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          ref={(el) => {
            if (el) {
              el.playbackRate = 0.5; // Slow down to 50%
            }
          }}
        >
          <source src="/videos/hero-video-1.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD584] mb-6">
            Building Trust Through Every Story We Raise
          </h1>
          <p className="font-barlow text-lg text-white mb-8 max-w-2xl mx-auto">
            DJA Construction brings over two decades of expertise in delivering exceptional 
            construction projects across commercial, residential, and industrial sectors.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pb-20 pt-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-teko text-3xl font-bold mb-6 text-[#1B1A1F]">Who We Are</h2>
              <p className="font-barlow text-[#1B1A1F]/80 mb-6 text-lg">
              As a leading construction partner in the Northeastern United States, we transform 
              ambitious multifamily projects from vision to reality. Our regional expertise and 
              commitment to transparency have established us as a trusted builder across New England.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-chakra-petch font-semibold italic mb-1 text-[#1B1A1F]">Strong Track-record</h3>
                    <p className="font-barlow text-[#1B1A1F]/70">From stable growth areas to emerging markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users2 className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-chakra-petch font-semibold italic mb-1 text-[#1B1A1F]">Client-Focused</h3>
                    <p className="font-barlow text-[#1B1A1F]/70">Your vision is our priority</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-chakra-petch font-semibold italic mb-1 text-[#1B1A1F]">Quality Assured</h3>
                    <p className="font-barlow text-[#1B1A1F]/70">No matter the product, no matter the standard, we've got you covered</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-[#AE330A] mt-1" />
                  <div>
                    <h3 className="font-chakra-petch font-semibold italic mb-1 text-[#1B1A1F]">Process Driven</h3>
                    <p className="font-barlow text-[#1B1A1F]/70">Efficient systems that deliver consistent results across sites</p>
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
                <p className="text-4xl font-bold mb-2">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouncing Arrow */}
      <div className="flex justify-center bg-white">
        <div className="animate-bounce">
          <ChevronDown className="w-12 h-12 text-[#AE330A] stroke-[3]" />
        </div>
      </div>

      {/* Services Title */}
      <section className="pt-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-teko text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B1A1F]">
            Our Expertise
          </h2>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.title} className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] object-cover"
                  />
                </Card>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-chakra-petch text-2xl font-semibold mb-4 text-[#AE330A]">
                    {service.title}
                  </h3>
                  {Array.isArray(service.description) ? (
                    <ul className="font-barlow text-[#1B1A1F]/80 text-lg space-y-3">
                      {service.description.map((point, i) => (
                        <li key={i} className="flex items-baseline gap-3">
                          <span className="text-[#AE330A] text-lg">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-barlow text-[#1B1A1F]/80 text-lg">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Work Title */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-teko text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B1A1F]">
            Our Work
          </h2>
        </div>
      </section>

      {/* Our Work Grid */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-[300px]">
            {/* Featured Project */}
            <Link href="/portfolio#one-park-apartments" className="block">
              <Card className="h-full group relative overflow-hidden cursor-pointer">
                <img 
                  src="/photos/onepark exterior.jpg"
                  alt="One Park Apartments Exterior"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-chakra-petch text-xl font-semibold text-white mb-2">
                      One Park Apartments
                    </h3>
                    <p className="font-barlow text-white/90">
                      Luxury Living in West Hartford
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Second Project */}
            <Link href="/portfolio#edge-on-hudson" className="block">
              <Card className="h-full group relative overflow-hidden cursor-pointer">
                <img 
                  src="photos/edge hudson ny overview.jpg"
                  alt="Edge-On-Hudson Overview"
                  className="w-full h-full object-cover object-left-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-chakra-petch text-xl font-semibold text-white mb-2">
                      Edge-On-Hudson
                    </h3>
                    <p className="font-barlow text-white/90">
                      1,117-unit luxury multifamily living community
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Third Project - Full Width */}
            <Link href="/portfolio#the-beacon-at-gateway" className="block md:col-span-2">
              <Card className="h-full group relative overflow-hidden cursor-pointer">
                <img 
                  src="photos/gateway scarborough campus.jpg"
                  alt="The Beacon at Gateway"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-chakra-petch text-xl font-semibold text-white mb-2">
                      The Beacon at Gateway
                    </h3>
                    <p className="font-barlow text-white/90">
                      216-unit luxury apartment campus
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}