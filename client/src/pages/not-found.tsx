import { Button } from "@/components/ui/button";
import { HardHat, Hammer, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1B1A1F] px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Construction Hat Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <HardHat className="h-24 w-24 text-[#FFD584]" />
            <Hammer className="h-12 w-12 text-[#AE330A] absolute -bottom-2 -right-2 transform rotate-45" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="font-teko text-6xl sm:text-7xl font-bold text-[#FFD584] mb-4">
          404: Site Under Construction
        </h1>
        
        <p className="font-barlow text-xl text-white/90 mb-8">
          Looks like this page is still in the planning phase. Our team is working hard, but for now, let's head back to safer ground.
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-[#AE330A] text-white hover:bg-[#AE330A]/90 border-none font-chakra-petch"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
