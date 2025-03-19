import { Phone, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation } from "wouter";

const teamMembers = [
  {
    name: "James Kiley",
    title: "President",
    description: "",
    email: "jimmy.k@djandrade.com",
    phone: "+1 (475) 222-7086",
  },
  {
    name: "Dario Andrade",
    title: "Director of Estimating",
    description: "",
    email: "dario.a@djandrade.com",
    phone: "",
  },
  {
    name: "Carl Weaver",
    title: "Operations Manager",
    description: "",
    email: "cweaver@djandrade.com",
    phone: "",
  },
  {
    name: "Michael Harrington",
    title: "Door, Hardware, and Material Specialist",
    description: "",
    email: "mharrington@djandrade.com",
    phone: "",
  }
];

export default function Contact() {
  const [location] = useLocation();
  
  // Effect to scroll to top when component mounts or location changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.includes('#top')) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If no hash, still scroll to top on page load
    else if (location === '/contact') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);
  
  return (
    <div className="min-h-screen pt-16" id="top">
      <section className="relative bg-[#1B1A1F] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD584] mb-6">
            Meet Our Team
          </h1>
          <p className="font-barlow text-lg text-white/90 max-w-2xl">
            Get to know the people behind DJA Construction's success and reach out directly to discuss your next project.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* President's Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 bg-[#1B1A1F]/90 rounded-lg" />
                  <div>
                    <h2 className="font-chakra-petch text-3xl font-semibold text-[#AE330A] mb-2">
                      {teamMembers[0].name}
                    </h2>
                    <p className="font-chakra-petch text-xl text-[#1B1A1F]/70 mb-6">
                      {teamMembers[0].title}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#AE330A]" />
                    <p className="font-barlow text-lg text-[#1B1A1F]">{teamMembers[0].phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#AE330A]" />
                    <p className="font-barlow text-lg text-[#1B1A1F]">{teamMembers[0].email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team Section */}
          <div>
            <h2 className="font-teko text-3xl font-bold text-[#1B1A1F] mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.slice(1).map((member) => (
                <Card key={member.name} className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-[#1B1A1F]/90 rounded-full" />
                    <div>
                      <h3 className="font-chakra-petch text-xl font-semibold text-[#AE330A]">
                        {member.name}
                      </h3>
                      <p className="font-chakra-petch text-[#1B1A1F]/70 mb-2">
                        {member.title}
                      </p>
                      <p className="font-barlow text-sm text-[#1B1A1F]/80 mb-4">
                        {member.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <Mail className="w-4 h-4 text-[#AE330A]" />
                        <p className="font-barlow text-sm text-[#1B1A1F]">{member.email}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
