import { useQuery } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { type Project } from "@shared/schema";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const projects = [
  {
    title: "Edge-On-Hudson",
    location: "Sleepy Hollow, NY",
    description: "Edge on Hudson is a contemporary residential development that seamlessly blends modern design with high-end finishes, offering luxury living along the scenic Hudson. Strategically positioned near vibrant cultural and recreational hotspots, this project redefines sophisticated urban lifestyles for discerning residents.",
    details: [
      "1,177 luxury residential units",
      "Mixed-use development",
      "Waterfront promenade",
      "16+ Acres of Parkland",
      "Two Walkable Metro-North Stations"
    ],
    imageUrl: "photos/edge hudson ny overview.jpg",
    completion: "2020"
  },
  {
    title: "The Beacon at Gateway",
    location: "Scarborough, ME",
    description: "Beacon at Gateway redefines urban living with sleek architecture and luxury residences, setting a new standard for contemporary design. Nestled in a dynamic neighborhood, this premier development features state-of-the-art amenities and a blend of sophistication and comfort, inviting residents to experience refined living.",
    details: [
      "216 luxury residential units",
      "Seasonally Heated Swimming Pool with Sundeck",
      "24/7 Fitness Center with Private Yoga Space",
      "Self-Serving Indoor Dog Salon",
      "Stainless Steel Appliances"
    ],
    imageUrl: "photos/gateway scarborough campus.jpg",
    completion: "2019"
  },
  {
    title: "The Vista",
    location: "Wyckoff, NJ",
    description: "The Vista is a luxurious continuing care retirement community (CCRC) in Wyckoff, NJ, designed for adults aged 62 and older, offering state-of-the-art amenities and nestled within Christian Health's scenic 78-acre campus in the Ramapo Mountains.",
    details: [
      "161 units",
      "Performing arts center",
      "State-of-the-Art Fitness Center",
      "Indoor Pool and Spa",
      "Multiple Dining Options"
    ],
    imageUrl: "photos/vista nj exterior.png",
    completion: "2021"
  },
  {
    title: "One Park Apartments",
    location: "West Hartford, CT",
    description: "One Park Road features modern luxury apartments in West Hartford, combining elegant design, premium amenities, and exceptional convenience. Located steps from Blue Back Square, this residential community offers sophisticated urban living in one of Connecticut's most vibrant neighborhoods.",
    details: [
      "292 luxury residential units",
      "14-story post-tensioned concrete structure",
      "Modern luxury living meets historic convent",
      "Indoor and outdoor community spaces",
      "Fitness center and resort-style pool"
    ],
    imageUrl: "/photos/onepark exterior.jpg",
    completion: "2023"
  }
];

export default function Portfolio() {
  const [location] = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Define hash IDs type for type safety
  type SectionId = "the-vista" | "one-park-apartments" | "edge-on-hudson" | "the-beacon-at-gateway";
  
  const sectionRefs = {
    "the-vista": useRef<HTMLElement | null>(null),
    "one-park-apartments": useRef<HTMLElement | null>(null),
    "edge-on-hudson": useRef<HTMLElement | null>(null),
    "the-beacon-at-gateway": useRef<HTMLElement | null>(null),
  };
  
  // Effect to handle hash navigation when component mounts
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash && Object.keys(sectionRefs).includes(hash)) {
        setIsNavigating(true);
        const id = hash as SectionId;
        const element = sectionRefs[id].current;
        
        if (element) {
          // First scroll to the top of the page smoothly
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          // Then after a short delay, scroll to the section
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            setIsNavigating(false);
          }, 300);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#1B1A1F] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD584] mb-6">
            Featured Projects
          </h1>
          <p className="font-barlow text-lg text-white/90 max-w-2xl">
            Showcasing our commitment to excellence in multifamily construction across the Northeast.
          </p>
        </div>
      </section>

      {/* Project Sections */}
      {projects.map((project, index) => {
        let sectionId = '';
        if (project.title === "The Vista") {
          sectionId = "the-vista";
        } else if (project.title === "One Park Apartments") {
          sectionId = "one-park-apartments";
        } else if (project.title === "Edge-On-Hudson") {
          sectionId = "edge-on-hudson";
        } else if (project.title === "The Beacon at Gateway") {
          sectionId = "the-beacon-at-gateway";
        }
        
        return (
          <section 
            key={project.title} 
            id={sectionId}
            ref={el => {
              if (sectionId && Object.keys(sectionRefs).includes(sectionId)) {
                sectionRefs[sectionId as SectionId].current = el;
              }
            }}
            className={`py-20 px-4 bg-white scroll-mt-24 transition-opacity duration-300 ${
              isNavigating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </Card>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="font-chakra-petch text-3xl font-semibold mb-2 text-[#AE330A]">
                      {project.title}
                    </h2>
                    <p className="font-chakra-petch text-xl text-[#1B1A1F]/70 mb-4">
                      {project.location}
                    </p>
                    <p className="font-barlow text-[#1B1A1F]/80 text-lg mb-6">
                      {project.description}
                    </p>
                    <ul className="font-barlow text-[#1B1A1F]/80 text-lg space-y-3">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-baseline gap-3">
                          <span className="text-[#AE330A] text-lg">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-chakra-petch text-[#1B1A1F]/70 mt-6">
                      Completed: {project.completion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
