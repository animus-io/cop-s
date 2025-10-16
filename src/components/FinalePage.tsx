import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users, Download, Award, Presentation, Camera, Music, Clock } from 'lucide-react';

interface FinalePageProps {
  onNavigate: (page: string) => void;
}

export function FinalePage({ onNavigate }: FinalePageProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-15T09:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);
  const events = [
    {
      time: '9:00 AM',
      title: 'Registration & Welcome',
      description: 'Participant check-in and opening ceremony',
      icon: Users
    },
    {
      time: '10:00 AM',
      title: 'Regional Chapter Presentations',
      description: 'Each chapter presents their policy recommendations',
      icon: Presentation
    },
    {
      time: '12:00 PM',
      title: 'Children\'s Climate Action Declaration Launch',
      description: 'Official unveiling of the unified youth climate declaration',
      icon: Award
    },
    {
      time: '2:00 PM',
      title: 'Artivism Showcase',
      description: 'Creative advocacy projects and performances',
      icon: Music
    },
    {
      time: '4:00 PM',
      title: 'Interactive Exhibition',
      description: 'Climate solutions exhibition and networking',
      icon: Camera
    },
    {
      time: '6:00 PM',
      title: 'Closing Ceremony',
      description: 'Recognition awards and commitment ceremonies',
      icon: Award
    }
  ];

  const highlights = [
    {
      title: 'Policy Presentations',
      description: 'Regional chapters present their policy recommendations to government officials and climate experts',
      image: 'https://images.unsplash.com/photo-1570210661710-e5549821e248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNsaW1hdGUlMjBhY3Rpb258ZW58MXx8fHwxNzU5NDk3ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Climate Action Declaration',
      description: 'Launch of a unified document outlining youth climate priorities and demands for 2025',
      image: 'https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91bmclMjBwZW9wbGV8ZW58MXx8fHwxNzU5NDk3ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Artivism Exhibition',
      description: 'Showcase of creative advocacy projects including art, videos, and performances',
      image: 'https://images.unsplash.com/photo-1757356892992-d8e5ceb4429d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc1OTQxNjg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const speakers = [
    {
      name: 'Dr. Malik Amin Aslam',
      role: 'Former Federal Minister for Climate Change',
      topic: 'Pakistan\'s Climate Leadership Journey'
    },
    {
      name: 'Fatima Jinnah',
      role: 'Youth Climate Activist',
      topic: 'The Power of Youth Movements'
    },
    {
      name: 'Prof. Dr. Aisha Khan',
      role: 'Climate Policy Expert',
      topic: 'Translating Youth Voices into Policy'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Save the Children Pakistan',
      topic: 'Safeguarding Youth in Climate Action'
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
              Grand Finale Event
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Islamabad National Finale
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              The culmination of 12 weeks of learning, simulation, and advocacy - where young climate 
              leaders from across Pakistan unite to present their vision for climate action.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Calendar className="w-5 h-5 text-green-600" />
                <span>June 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Islamabad Convention Center</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-purple-600" />
                <span>500+ Participants</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1707904960159-b6fef0b66d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NTk0OTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pakistan landscape representing climate action"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">A Platform for Youth Climate Leadership</h3>
              <p className="text-lg">Where policies meet passion and voices become action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Widget */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Countdown to the Finale</h2>
            <p className="text-lg text-gray-600">Don't miss this historic gathering of young climate leaders</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-vibrant-green mb-2">{timeLeft.days}</div>
                <div className="text-sm text-gray-900 font-medium">Days</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-sky-blue mb-2">{timeLeft.hours}</div>
                <div className="text-sm text-gray-900 font-medium">Hours</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-coral-orange mb-2">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-900 font-medium">Minutes</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-creative-purple mb-2">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-900 font-medium">Seconds</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Schedule</h2>
          
          <div className="space-y-4">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <Badge variant="outline" className="text-sm">{event.time}</Badge>
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Highlights</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Children's Climate Action Declaration */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Children's Climate Action Declaration 2025
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A unified voice from Pakistan's youth outlining climate priorities, 
              policy recommendations, and commitments for sustainable action.
            </p>
          </div>
          
          <Card className="border-green-200 bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Declaration Highlights</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Demands</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mandatory climate education in all schools</li>
                    <li>• Youth representation in climate policy</li>
                    <li>• Investment in renewable energy</li>
                    <li>• Protection of vulnerable communities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Youth Commitments</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Community climate action projects</li>
                    <li>• Continued advocacy and awareness</li>
                    <li>• Sustainable lifestyle choices</li>
                    <li>• Peer education and mentoring</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-vibrant-green hover:bg-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Declaration (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keynote Speakers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{speaker.role}</p>
                  <Badge variant="outline" className="text-xs">
                    {speaker.topic}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Exhibition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Gallery & Exhibition Showcase
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <Camera className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo Exhibition</h3>
                <p className="text-gray-600">
                  Visual documentation of the 12-week journey across all regional chapters
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Showcase</h3>
                <p className="text-gray-600">
                  Interactive display of climate solutions and artivism projects created by participants
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking Zone</h3>
                <p className="text-gray-600">
                  Space for participants to connect, share experiences, and plan future collaborations
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              The finale will be livestreamed for families and supporters who cannot attend in person
            </p>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Register for Livestream Access
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-creative-purple via-vibrant-green to-sky-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Be Part of Pakistan's Climate Future
          </h2>
          <p className="text-xl mb-8 text-green-100">
            The finale represents not just an ending, but the beginning of a lifelong commitment 
            to climate action. Join us in Islamabad for this historic moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-coral-orange hover:bg-creative-purple hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300"
            >
              Apply to Participate
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-coral-orange px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}