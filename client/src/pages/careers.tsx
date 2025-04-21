import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample job listings - these would typically come from a CMS or API
/* 
const jobListings = [
  {
    id: 1,
    title: "Construction Project Manager",
    type: "Full-time",
    location: "On-site",
    description: "Lead construction projects from initial planning to completion, ensuring adherence to timelines, safety protocols, and quality standards.",
    responsibilities: [
      "Develop and manage project schedules and budgets",
      "Coordinate with subcontractors, architects, and clients",
      "Ensure compliance with building codes and safety regulations",
      "Monitor project progress and make adjustments as needed"
    ],
    requirements: [
      "5+ years of construction project management experience",
      "Knowledge of construction methods, materials, and regulations",
      "Strong leadership and communication skills",
      "PMP certification preferred"
    ]
  },
  {
    id: 2,
    title: "Skilled Carpenter",
    type: "Full-time",
    location: "On-site",
    description: "Join our team of skilled carpenters to work on residential and commercial construction projects.",
    responsibilities: [
      "Read and interpret blueprints and construction documents",
      "Measure, cut, and shape wood, drywall, and other materials",
      "Install structures and fixtures such as windows, frames, and doors",
      "Inspect and replace damaged framework or structures"
    ],
    requirements: [
      "3+ years of carpentry experience",
      "Proficiency with hand and power tools",
      "Ability to read and understand construction plans",
      "Physical stamina and attention to detail"
    ]
  },
  {
    id: 3,
    title: "Administrative Assistant",
    type: "Full-time",
    location: "Office-based",
    description: "Provide administrative support to our construction management team, helping to ensure smooth office operations.",
    responsibilities: [
      "Manage phone calls, emails, and correspondence",
      "Organize and maintain digital and physical filing systems",
      "Assist with scheduling and calendar management",
      "Support project managers with document preparation"
    ],
    requirements: [
      "Previous administrative experience, preferably in construction",
      "Proficiency with Microsoft Office and construction management software",
      "Excellent organizational and multitasking skills",
      "Strong communication abilities"
    ]
  }
];
*/

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#1B1A1F] pt-32 pb-20 px-4">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFD584] mb-6">
            Join Our Team
          </h1>
          <p className="font-barlow text-lg text-white mb-8 max-w-2xl mx-auto">
            At DJ Andrade Construction, we're building more than structures—we're building careers. Explore our current opportunities and become part of a team dedicated to quality craftsmanship and excellence.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 
        <h2 className="font-teko text-3xl sm:text-4xl font-bold text-[#1B1A1F] mb-10 text-center">
          Current Opportunities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobListings.map((job) => (
            <Card key={job.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="font-chakra-petch text-2xl">{job.title}</CardTitle>
                <CardDescription className="font-barlow">
                  {job.type} · {job.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-barlow text-gray-700 mb-4">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-chakra-petch font-medium text-lg mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1 font-barlow">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-chakra-petch font-medium text-lg mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1 font-barlow">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#AE330A] hover:bg-[#8E2A08]">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        */}

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-teko text-3xl sm:text-4xl font-bold text-[#1B1A1F] mb-6">
            DJ Andrade Construction is an Equal Opportunity Employer
          </h2>
          <div className="w-full h-px bg-gray-200 my-8"></div>
          <h2 className="font-teko text-3xl sm:text-4xl font-bold text-[#1B1A1F] mb-6">
            No Current Openings
          </h2>
          <p className="font-barlow text-lg text-gray-600 mb-2">
            We don't have any specific positions available at the moment, but we're always interested in meeting talented professionals in the construction industry.
          </p>
        </div>

        {/* 
        <div className="max-w-3xl mx-auto">
          <h2 className="font-teko text-3xl font-bold text-[#1B1A1F] mb-6 text-center">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-chakra-petch text-xl font-semibold mb-2">Professional Growth</h3>
              <p className="font-barlow text-gray-700">
                We invest in our team members through training, mentorship, and opportunities for advancement within the company.
              </p>
            </div>
            <div>
              <h3 className="font-chakra-petch text-xl font-semibold mb-2">Collaborative Environment</h3>
              <p className="font-barlow text-gray-700">
                Work alongside skilled professionals who share knowledge and support each other to deliver exceptional results.
              </p>
            </div>
            <div>
              <h3 className="font-chakra-petch text-xl font-semibold mb-2">Competitive Benefits</h3>
              <p className="font-barlow text-gray-700">
                We offer competitive wages, health insurance options, paid time off, and retirement plans to support our team.
              </p>
            </div>
            <div>
              <h3 className="font-chakra-petch text-xl font-semibold mb-2">Meaningful Work</h3>
              <p className="font-barlow text-gray-700">
                Be part of projects that transform communities and leave a lasting impact on the built environment.
              </p>
            </div>
          </div>
        </div>
        */}
      </section>
    </div>
  );
} 