import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Users,
  BookOpen,
  Megaphone,
  FileText,
  Shield,
  Globe,
  Award,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const phases = [
    {
      icon: BookOpen,
      title: "Learn",
      description:
        "Climate science, policy frameworks, and negotiation skills through interactive workshops",
      color: "bg-blue-500 text-white shadow-lg",
    },
    {
      icon: Users,
      title: "Simulate",
      description:
        "Engage in mock COP negotiations representing different countries and stakeholders",
      color: "bg-green-500 text-white shadow-lg",
    },
    {
      icon: Megaphone,
      title: "Artivism",
      description:
        "Create compelling advocacy content through art, media, and creative expression",
      color: "bg-purple-500 text-white shadow-lg",
    },
    {
      icon: FileText,
      title: "Policy",
      description:
        "Develop actionable policy recommendations for real-world climate challenges",
      color: "bg-orange-500 text-white shadow-lg",
    },
  ];

  const partners = [
    {
      name: "Save the Children",
      role: "Lead Partner",
      logo: "/assets/save-children-logo.png",
    },
    {
      name: "Sustainability First",
      role: "Implementation Partner",
      logo: "/assets/sustainability-first-logo.png",
    },

    {
      name: "Ministry of Climate Change and Enviormental Restoration",
      //  role: "Youth Network",
      logo: "/assets/mocc-logo.png",
    },
    {
      name: "Pak Mission Society",
      //  role: "Youth Network",
      logo: "/assets/pak-mission-society-logo.webp",
    },
    // { name: "Green Growth Initiative", role: "Technical Support" },
    // { name: "UN Youth Climate", role: "Global Partner" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 via-blue-500 to-yellow-400 py-20 text-white">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-yellow-400 text-gray-900 border-0 shadow-lg font-bold animate-pulse"
                >
                  🚀 Registration Open
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  COP Simulation Pakistan{" "}
                  <span className="text-yellow-400 drop-shadow-lg">2025</span>
                </h1>
                <p className="text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-sm">
                  Join 500+ young climate advocates across Pakistan in the
                  largest youth-led climate simulation. Learn, simulate, create,
                  and influence real climate policy.
                </p>
                <p className="text-xl text-white/95 leading-relaxed font-medium drop-shadow-sm">
                  Where Young Voices Shape Climate Action
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("apply")}
                  className="cursor-pointer bg-white text-green-600 hover:bg-green-600 hover:text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-bold rounded-xl transform hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("apply")}
                  className="cursor-pointer text-blue-600 bg-white hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Volunteer
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("about")}
                  className="cursor-pointer text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Partner with Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/assets/hero-banner.jpg"
                  alt="Youth climate activists"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Globe className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">5 Cities</p>
                    <p className="text-sm text-gray-600">500+ Participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Four-Phase Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a comprehensive climate action program designed to
              build knowledge, skills, and real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card
                  key={phase.title}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div
                        className={`w-20 h-20 rounded-3xl ${phase.color} mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-sm font-medium text-gray-500">
                            Phase {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-charcoal">
                          {phase.title}
                        </h3>
                        <p className="text-charcoal/70 font-medium">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2024 Success Stories */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-600 to-orange-500 text-white border-0 mb-4 shadow-lg animate-pulse"
            >
              🏆 COP Simulation Pakistan 2024 Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Building on Proven Success
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              Our 2024 pilot program proved that Pakistani youth are ready to
              lead climate action. Here's how we made an impact across Lahore
              and Karachi.
            </p>
          </div>

          {/* Success Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Key Achievement Card */}
            <Card className="col-span-1 lg:col-span-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Policy Impact Achievement
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our participants developed 8 comprehensive policy
                      recommendations that were officially presented to the
                      Climate Change Ministry and Provincial Environmental
                      Protection Agencies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Water Conservation
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200"
                      >
                        Urban Planning
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-purple-50 text-purple-700 border-purple-200"
                      >
                        Youth Engagement
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo Testimonial */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <ImageWithFallback
                    src="/assets/logo-flat-black.png"
                    alt="2024 COP Simulation participant"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    2024 Graduate
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-3">
                  "COP Simulation changed how I see my role in fighting climate
                  change. I went from feeling helpless to leading a water
                  conservation project in my school."
                </blockquote>
                <cite className="text-sm text-gray-600 font-semibold">
                  - Zainab Ahmed, Age 17, Lahore Chapter
                </cite>
              </CardContent>
            </Card>
          </div>

          {/* Media Coverage & Recognition */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Media Recognition
                  </h3>
                  <p className="text-gray-700 mb-6">
                    The 2024 program gained national attention for its
                    innovative approach to youth climate education and was
                    featured across multiple media platforms.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-xs">
                          GEO
                        </span>
                      </div>
                      <span className="text-gray-700">
                        Featured on Geo News Prime Time
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">
                          DWN
                        </span>
                      </div>
                      <span className="text-gray-700">
                        Dawn Newspaper Special Report
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xs">
                          PTV
                        </span>
                      </div>
                      <span className="text-gray-700">
                        PTV World Documentary
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwcHJvdGVzdCUyMHlvdXRofGVufDF8fHx8MTc1OTQ5Nzg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Youth climate action gathering 2024"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">
                      Karachi Final Event
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2024 vs 2025 Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Badge
                    variant="outline"
                    className="bg-gray-200 text-gray-700"
                  >
                    2024 Pilot
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Participants</span>
                    <span className="font-bold text-gray-900">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cities</span>
                    <span className="font-bold text-gray-900">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Duration</span>
                    <span className="font-bold text-gray-900">8 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Policy Recommendations
                    </span>
                    <span className="font-bold text-gray-900">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 shadow-xl">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Badge className="bg-green-600 text-white">
                    2025 Scale-Up
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Participants</span>
                    <span className="font-bold text-green-600">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cities</span>
                    <span className="font-bold text-green-600">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Duration</span>
                    <span className="font-bold text-green-600">12 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Expected Impact</span>
                    <span className="font-bold text-green-600">20+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action from Success */}
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to be Part of Our 2025 Success Story?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Join hundreds of Pakistani youth who are already making a
                difference. Our 2025 program builds on proven success with
                enhanced curriculum and expanded reach.
              </p>
              <Button
                size="lg"
                onClick={() => onNavigate("apply")}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join COP Simulation 2025
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats from 2024 Pilot */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge
              variant="secondary"
              className="bg-yellow-400 text-gray-900 border-0 mb-4 font-bold shadow-lg"
            >
              📊 2024 Pilot Program Results
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Proven Impact
            </h2>
            <p className="text-gray-700 font-medium">
              Building on our successful 2024 pilot program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">300+</div>
              <div className="text-gray-900 font-medium">
                Youth Engaged (2024)
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Now scaling to 500+
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-900 font-medium">
                Cities Covered (2024)
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Expanding to 5 cities
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-900 font-medium">
                Policy Recommendations
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Presented to government
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-900 font-medium">
                Participant Satisfaction
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Continued engagement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-gray-600">
              Collaborating with leading organizations to amplify youth climate
              action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card
                key={partner.name}
                className="text-center px-2 py-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-[120px] h-[120px] bg-gray-100 rounded-full p-4 mx-auto mb-4 flex items-center justify-center overflow-hidden"
                  style={{ height: "100px", width: "100px" }}
                >
                  {partner?.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-gray-400">
                      {partner.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h4>
                <p className="text-sm text-gray-600">{partner.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding Highlight */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Safe & Inclusive Environment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We prioritize the safety and wellbeing of all participants. Our
            comprehensive safeguarding policies ensure a secure, inclusive
            environment for learning and growth.
          </p>
          <Button
            variant="outline"
            onClick={() => onNavigate("safeguarding")}
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Learn About Our Safeguarding
          </Button>
        </div>
      </section>

      {/* Call to Action */}

      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-20 left-0 bottom-0 max-w-screen-2xl">
          <img src="/assets/new.jpg" className="h-[300px] object-contain" />
        </div>
        <div className="relative py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Shape Pakistan's Climate Future?
          </h2>
          <p className="text-xl mb-8 text-white font-medium">
            Join hundreds of young climate advocates in the most impactful youth
            climate program in Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("apply")}
              className="cursor-pointer bg-white text-green-600 hover:bg-green-600 hover:text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white hover:border-green-600"
            >
              Apply Now - It's Free!
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("chapters")}
              className="cursor-pointer border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Chapters
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
