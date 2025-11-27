import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("EN");

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Chapters", id: "chapters" },
    { name: "Apply", id: "apply" },
    { name: "Safeguarding", id: "safeguarding" },
    { name: "Finale", id: "finale" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}

            <div className="flex items-center h-10">
              <img src="/assets/logo.png" alt="logo" className="h-12" />
            </div>

            {/* Desktop Navigation */}
            <div>
              {" "}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
              <nav className="hidden md:flex space-x-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-3 py-2 rounded transition-colors font-medium ${
                      currentPage === item.id
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Language Toggle & Mobile Menu */}
            {/* <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'EN' ? 'UR' : 'EN')}
                className="hidden sm:flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "EN" ? "UR" : "EN")}
                  className="flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Safeguarding Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-2">
            <Badge
              variant="secondary"
              className="bg-white text-green-600 border-0 shadow-sm font-bold"
            >
              🛡️ Child-Safe by Design
            </Badge>
            <span className="text-sm text-white font-bold drop-shadow-sm">
              Parental/Guardian consent required for all participants
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              {/* <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">COP</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    COP Simulation Pakistan 2025
                  </h3>
                  <p className="text-sm text-yellow-400">
                    Where Young Voices Shape Climate Action
                  </p>
                </div>
              </div> */}
              <div className="flex items-center h-10 mb-4">
                <img src="/assets/logo-white.png" alt="logo" className="h-12" />
              </div>
              <p className="text-gray-300 mb-4">
                Empowering youth across Pakistan to engage in climate action
                through simulation, learning, and advocacy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => onNavigate("about")}
                    className="hover:text-white"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("chapters")}
                    className="hover:text-white"
                  >
                    Chapters
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("apply")}
                    className="hover:text-white"
                  >
                    Apply Now
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("safeguarding")}
                    className="hover:text-white"
                  >
                    Safeguarding
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Islamabad, Pakistan</p>
                <p>info@copsimulation.pk</p>
                <p>+92 51 123 4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 COP Simulation Pakistan. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <span>Powered by Animus IO</span>
              <span>•</span>
              <span>In partnership with Sustainability First</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
