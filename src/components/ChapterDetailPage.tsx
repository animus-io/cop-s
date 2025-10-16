import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users, Download, Clock, User, ArrowLeft } from 'lucide-react';

interface ChapterDetailPageProps {
  chapterId: string;
  onNavigate: (page: string) => void;
}

export function ChapterDetailPage({ chapterId, onNavigate }: ChapterDetailPageProps) {
  // Sample data - in a real app this would come from props or API
  const chapterData = {
    lahore: {
      city: 'Lahore',
      province: 'Punjab',
      theme: 'Air Quality & Urban Sustainability',
      description: 'Lahore faces severe air pollution challenges, making it one of the most polluted cities globally. Our chapter focuses on understanding the sources of pollution, exploring innovative solutions, and developing actionable policies for cleaner air and sustainable urban development.',
      image: 'https://images.unsplash.com/photo-1614964494722-0546c3ce4b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWhvcmUlMjBhaXIlMjBwb2xsdXRpb258ZW58MXx8fHwxNzU5NDk3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      participants: 120,
      startDate: 'March 1, 2025',
      venue: 'University of Punjab, Lahore',
      coordinator: 'Dr. Ayesha Khan',
      color: 'bg-red-500'
    },
    karachi: {
      city: 'Karachi',
      province: 'Sindh',
      theme: 'Coastal Climate Resilience',
      description: 'As Pakistan\'s largest port city, Karachi is highly vulnerable to sea-level rise and coastal erosion. This chapter explores marine ecosystem protection, sustainable coastal development, and climate adaptation strategies for coastal communities.',
      image: 'https://images.unsplash.com/photo-1759323050124-eb669cec0b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhY2hpJTIwY29hc3RhbCUyMHNlYXxlbnwxfHx8fDE3NTk0OTc5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      participants: 150,
      startDate: 'March 1, 2025',
      venue: 'Karachi University, Karachi',
      coordinator: 'Prof. Ahmed Hassan',
      color: 'bg-blue-500'
    },
    // Default data for other chapters
    default: {
      city: 'Regional Chapter',
      province: 'Pakistan',
      theme: 'Climate Action & Sustainability',
      description: 'This regional chapter focuses on addressing local climate challenges through youth-led initiatives, policy development, and community engagement.',
      image: 'https://images.unsplash.com/photo-1707904960159-b6fef0b66d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NTk0OTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      participants: 100,
      startDate: 'March 8, 2025',
      venue: 'Local University Campus',
      coordinator: 'Chapter Coordinator',
      color: 'bg-green-500'
    }
  };

  const chapter = chapterData[chapterId as keyof typeof chapterData] || chapterData.default;

  const schedule = [
    {
      week: 'Week 1-2',
      phase: 'Orientation & Climate Science',
      activities: ['Program introduction', 'Climate science fundamentals', 'Local climate challenges assessment']
    },
    {
      week: 'Week 3-5',
      phase: 'Policy & Negotiation Training',
      activities: ['International climate policy overview', 'Negotiation skills workshop', 'Role assignment for simulation']
    },
    {
      week: 'Week 6-8',
      phase: 'COP Simulation',
      activities: ['Mock COP negotiations', 'Country position development', 'Draft agreement negotiations']
    },
    {
      week: 'Week 9-10',
      phase: 'Artivism & Advocacy',
      activities: ['Creative advocacy workshop', 'Media production', 'Public presentation skills']
    },
    {
      week: 'Week 11-12',
      phase: 'Policy Development',
      activities: ['Local policy recommendations', 'Action plan development', 'Final presentations']
    }
  ];

  const speakers = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Climate Policy Expert',
      organization: 'Pakistan Institute of Development Economics',
      topic: 'Climate Policy in Pakistan'
    },
    {
      name: 'Ali Raza',
      role: 'Youth Climate Activist',
      organization: 'Friday for Future Pakistan',
      topic: 'Youth-Led Climate Movements'
    },
    {
      name: 'Prof. Maria Khan',
      role: 'Environmental Scientist',
      organization: 'Local University',
      topic: 'Regional Climate Challenges'
    }
  ];

  const downloads = [
    { name: 'City Climate Brief', description: 'Comprehensive overview of local climate challenges and opportunities' },
    { name: 'Participant Handbook', description: 'Complete guide to the program, schedule, and expectations' },
    { name: 'Reading Materials', description: 'Essential readings on climate science and policy' },
    { name: 'Simulation Guide', description: 'Rules and procedures for the COP simulation exercise' }
  ];

  return (
    <div className="py-8">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Button 
          variant="outline" 
          onClick={() => onNavigate('chapters')}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Chapters</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <ImageWithFallback
            src={chapter.image}
            alt={`${chapter.city} landscape`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <Badge className={`${chapter.color} text-white border-0 mb-4`}>
                {chapter.province}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{chapter.city}</h1>
              <p className="text-2xl mb-6 text-gray-200">{chapter.theme}</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{chapter.participants} Participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Starts {chapter.startDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{chapter.venue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter Focus</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {chapter.description}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Understanding local climate challenges and their global context</li>
                  <li>• International climate policy frameworks and negotiation processes</li>
                  <li>• Practical skills in advocacy, communication, and policy development</li>
                  <li>• Collaborative problem-solving and leadership development</li>
                  <li>• Creative approaches to climate communication and community engagement</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Chapter Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">12 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium">Hybrid (Online + In-person)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-medium">English & Urdu</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Chapter Coordinator</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{chapter.coordinator}</h4>
                      <p className="text-sm text-gray-600">Lead Facilitator</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                onClick={() => onNavigate('apply')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              >
                Apply to This Chapter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Schedule</h2>
          
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.phase}</h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.week}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Speakers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{speaker.role}</p>
                  <p className="text-xs text-gray-500 mb-3">{speaker.organization}</p>
                  <Badge variant="outline" className="text-xs">
                    {speaker.topic}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chapter Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Gallery Image {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Statement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Youth Statement from {chapter.city}</h2>
            <p className="text-lg text-gray-700">
              Voices from our current participants about their climate action journey
            </p>
          </div>
          
          <Card className="bg-white border-l-4 border-l-blue-500">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "Participating in COP Simulation has opened my eyes to how young people can really make a difference in climate policy. 
                    We're not just learning about climate change - we're actively working on solutions for our community."
                  </blockquote>
                  <cite className="text-sm text-gray-600">
                    - Ayesha Khan, Age 16, Participant from {chapter.city}
                  </cite>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Chapter Focus Areas</h4>
                <p className="text-gray-700 text-sm">
                  Our {chapter.city} chapter is specifically addressing local challenges while connecting to global climate action. 
                  Through hands-on projects and policy simulations, participants are developing practical solutions 
                  that can be implemented in their communities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Downloads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{download.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{download.description}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}