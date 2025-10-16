import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

interface ChaptersPageProps {
  onNavigate: (page: string, chapterId?: string) => void;
}

export function ChaptersPage({ onNavigate }: ChaptersPageProps) {
  const chapters = [
    {
      id: 'lahore',
      city: 'Lahore',
      province: 'Punjab',
      theme: 'Air Quality & Urban Sustainability',
      description: 'Addressing air pollution, waste management, and sustainable urban development in Pakistan\'s cultural capital.',
      participants: 120,
      startDate: 'March 1, 2025',
      image: 'https://images.unsplash.com/photo-1614964494722-0546c3ce4b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWhvcmUlMjBhaXIlMjBwb2xsdXRpb258ZW58MXx8fHwxNzU5NDk3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-orange-100 border-orange-200',
      tagColor: 'bg-coral-orange'
    },
    {
      id: 'karachi',
      city: 'Karachi',
      province: 'Sindh',
      theme: 'Coastal Climate Resilience',
      description: 'Tackling sea-level rise, coastal erosion, and marine ecosystem protection for Pakistan\'s largest city.',
      participants: 150,
      startDate: 'March 1, 2025',
      image: 'https://images.unsplash.com/photo-1759323050124-eb669cec0b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhY2hpJTIwY29hc3RhbCUyMHNlYXxlbnwxfHx8fDE3NTk0OTc5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-blue-100 border-blue-200',
      tagColor: 'bg-sky-blue'
    },
    {
      id: 'quetta',
      city: 'Quetta',
      province: 'Balochistan',
      theme: 'Water Scarcity & Desert Adaptation',
      description: 'Focusing on water conservation, drought resilience, and sustainable agriculture in arid regions.',
      participants: 80,
      startDate: 'March 8, 2025',
      image: 'https://images.unsplash.com/photo-1693563920446-3e77e164827c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHNjYXJjaXR5JTIwZHJvdWdodHxlbnwxfHx8fDE3NTk0OTc5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-yellow-100 border-yellow-200',
      tagColor: 'bg-bright-yellow text-gray-900'
    },
    {
      id: 'peshawar',
      city: 'Peshawar',
      province: 'Khyber Pakhtunkhwa',
      theme: 'Renewable Energy & Green Infrastructure',
      description: 'Promoting clean energy solutions, green building practices, and sustainable transportation systems.',
      participants: 100,
      startDate: 'March 8, 2025',
      image: 'https://images.unsplash.com/photo-1599405032290-29d6e9e7274c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB3aW5kfGVufDF8fHx8MTc1OTQ5Nzk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-green-100 border-green-200',
      tagColor: 'bg-vibrant-green'
    },
    {
      id: 'gilgit',
      city: 'Gilgit-Baltistan',
      province: 'Northern Areas',
      theme: 'Glacial Melt & Mountain Ecosystems',
      description: 'Addressing glacial retreat, mountain biodiversity conservation, and climate-resilient tourism.',
      participants: 75,
      startDate: 'March 15, 2025',
      image: 'https://images.unsplash.com/photo-1707904387265-59c7da3ab120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBha2lzdGFufGVufDF8fHx8MTc1OTQ5Nzk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-purple-100 border-purple-200',
      tagColor: 'bg-creative-purple'
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Regional Chapters
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Five regional chapters across Pakistan, each focusing on unique climate challenges 
            and solutions relevant to their local context.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>525 Total Participants</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>5 Major Cities</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>March - June 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 group ${chapter.color}`}>
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={chapter.image}
                    alt={`${chapter.city} climate challenges`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${chapter.tagColor} text-white border-0`}>
                      {chapter.province}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{chapter.city}</h3>
                    <p className="text-sm text-gray-200">{chapter.theme}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {chapter.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Participants:</span>
                      <span className="font-semibold text-gray-900">{chapter.participants}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="font-semibold text-gray-900">{chapter.startDate}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => onNavigate('chapter-detail', chapter.id)}
                    className="w-full group"
                    variant="outline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Regional Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why a Regional Approach?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Pakistan's diverse geography and climate challenges require localized solutions. 
            Our regional chapters ensure participants engage with climate issues most relevant 
            to their communities while building a unified national movement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Local Relevance</h3>
              <p className="text-gray-600">
                Each chapter addresses specific climate challenges faced by their region
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Community Engagement</h3>
              <p className="text-gray-600">
                Deeper connections with local stakeholders and community leaders
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Scalable Impact</h3>
              <p className="text-gray-600">
                Local actions that contribute to national climate goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-bright-yellow via-coral-orange to-creative-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Join Your Regional Chapter?
          </h2>
          <p className="text-xl mb-8 text-white/95 drop-shadow-sm font-medium">
            Select your chapter and start your climate action journey with peers from your region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('apply')}
              className="bg-white text-vibrant-green hover:bg-vibrant-green hover:text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white hover:border-vibrant-green"
            >
              Apply to Your Chapter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-creative-purple px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More About the Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}