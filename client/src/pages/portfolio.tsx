import { useQuery } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { type Project } from "@shared/schema";

const projects = [
  {
    title: "The Beacon at Gateway",
    location: "Scarborough, ME",
    description: "A 216-unit luxury apartment campus set within a master-planned community. This $95M development emphasizes sustainable living and community connection.",
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
    title: "Edge-On-Hudson",
    location: "Sleepy Hollow, NY",
    description: "A transformative waterfront development featuring 1,177 luxury residential units. This $200M+ project combines waterfront living with modern amenities and sustainable design.",
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
    title: "One Park Apartments",
    location: "West Hartford, CT",
    description: "A 14-story, 292-unit luxury apartment complex with stunning views of the Manhattan skyline. This $120M development features high-end amenities, structured parking, and premium finishes throughout.",
    details: [
      "292 luxury residential units",
      "14-story post-tensioned concrete structure",
      "Modern luxury living meets historic convent",
      "Indoor and outdoor community spaces",
      "Fitness center and resort-style pool"
    ],
    imageUrl: "/photos/onepark exterior.jpg",
    completion: "2023"
  },
  {
    title: "The Vista",
    location: "Wyckoff, NJ",
    description: "A premier senior living community designed to provide exceptional comfort and care. This $85M development combines luxury accommodations with specialized healthcare facilities.",
    details: [
      "161 units",
      "Performing arts center",
      "State-of-the-Art Fitness Center",
      "Indoor Pool and Spa",
      "Multiple Dining Options"
    ],
    imageUrl: "photos/vista nj exterior.png",
    completion: "2021"
  }
];

export default function Portfolio() {
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
      {projects.map((project, index) => (
        <section key={project.title} className="py-20 px-4 bg-white">
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
      ))}
    </div>
  );
}
