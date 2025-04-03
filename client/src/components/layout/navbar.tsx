import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    setIsOpen(false); // Close mobile menu if open
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b-2 border-[#D4C5B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center" onClick={handleNavClick}>
              <img 
                src="branding/DJA Lockup B - Orange.png" 
                alt="DJAndrade Construction Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`inline-flex items-center px-3 pt-1 font-chakra-petch text-lg font-medium transition-colors
                  ${location === item.href
                    ? "text-[#AE330A] border-b-2 border-[#AE330A]"
                    : "text-[#1B1A1F] hover:text-[#AE330A]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1B1A1F]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 font-chakra-petch text-base font-medium rounded-md
                    ${location === item.href
                      ? "text-[#AE330A] bg-[#AE330A]/10"
                      : "text-[#1B1A1F] hover:text-[#AE330A] hover:bg-[#AE330A]/5"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}