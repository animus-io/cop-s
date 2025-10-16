import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Users, Globe, Lightbulb, Calendar, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const timeline = [
    {
      id: 'launch-2024',
      year: '2024',
      title: 'COP Simulation Pakistan Launch',
      description: 'First pilot program with 100 participants across 2 cities',
      status: 'completed'
    },
    {
      id: 'scale-up-2025',
      year: '2025',
      title: 'National Scale-Up',
      description: 'Expanding to 5 cities with 500+ participants and enhanced curriculum',
      status: 'current'
    },
    {
      id: 'recognition-2025',
      year: '2025',
      title: 'International Recognition',
      description: 'Recognition as leading youth climate program in South Asia',
      status: 'upcoming'
    }
  ];

  const partners = [
    {
      name: 'Save the Children',
      role: 'Lead Implementation Partner',
      description: 'Global leader in child rights and protection, bringing safeguarding expertise and youth engagement frameworks.',
      logo: 'STC'
    },
    {
      name: 'Pakistan Red Crescent Society',
      role: 'National Implementation Partner',
      description: 'Pakistan\'s premier humanitarian organization with extensive reach across all provinces and regions.',
      logo: 'PRCS'
    },
    {
      name: 'Climate Youth Pakistan',
      role: 'Youth Network Partner',
      description: 'National youth climate movement connecting young activists and advocates across Pakistan.',
      logo: 'CYP'
    },
    {
      name: 'Green Growth Initiative',
      role: 'Technical Advisory Partner',
      description: 'Climate policy think tank providing technical expertise on climate negotiations and policy frameworks.',
      logo: 'GGI'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Youth-Led',
      description: 'Empowering young people to lead climate action and policy discussions',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Globe,
      title: 'Inclusive',
      description: 'Welcoming participants from all backgrounds, regions, and communities',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Target,
      title: 'Action-Oriented',
      description: 'Focusing on practical solutions and real-world impact',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'Encouraging creative approaches to climate challenges',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                About Our Mission
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900">
                Empowering Pakistan's Youth to Lead Climate Action
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                COP Simulation Pakistan 2025 is the country's largest youth-led climate action program, 
                designed to educate, engage, and empower young people to become effective climate advocates 
                and policy influencers.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91bmclMjBwZW9wbGV8ZW58MXx8fHwxNzU5NDk3ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diverse young people collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-green-500">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Pakistan where young people are at the forefront of climate action, equipped with 
                  the knowledge, skills, and platforms to drive meaningful environmental change and 
                  influence policy decisions that affect their future.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-l-4 border-l-blue-500">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide Pakistani youth with comprehensive climate education, hands-on simulation 
                  experiences, and advocacy skills training that enables them to effectively participate 
                  in climate governance and drive sustainable development in their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to youth climate education and engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-full ${value.color} mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From pilot program to national movement
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.status === 'completed' ? 'bg-green-100 text-green-600' :
                    item.status === 'current' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Calendar className="w-6 h-6" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <Badge variant={
                      item.status === 'completed' ? 'default' :
                      item.status === 'current' ? 'secondary' : 'outline'
                    }>
                      {item.year}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Advisory Board */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Team & Advisory Board</h2>
            <p className="text-lg text-gray-600">
              Experienced leaders and experts guiding our mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Leadership Team</h3>
              <div className="space-y-4">
                {[
                  { name: 'Dr. Ayesha Rahman', role: 'Program Director', org: 'Save the Children Pakistan' },
                  { name: 'Ahmed Hassan', role: 'National Coordinator', org: 'PRCS' },
                  { name: 'Fatima Ali', role: 'Youth Engagement Lead', org: 'Climate Youth Pakistan' },
                  { name: 'Dr. Hassan Khan', role: 'Safeguarding Director', org: 'Save the Children' }
                ].map((member, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-green-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Advisory Board</h3>
              <div className="space-y-4">
                {[
                  { name: 'Dr. Malik Amin Aslam', role: 'Climate Policy Advisor', org: 'Former Federal Minister' },
                  { name: 'Prof. Dr. Aisha Khan', role: 'Technical Advisor', org: 'LUMS Environmental Sciences' },
                  { name: 'Sarah Ahmed', role: 'Youth Development Expert', org: 'UNICEF Pakistan' },
                  { name: 'Ali Tauqeer Sheikh', role: 'Sustainability Advisor', org: 'LEAD Pakistan' }
                ].map((member, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600">
              Collaborating with leading organizations to maximize impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <Card key={partner.name} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-gray-600">{partner.logo}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{partner.name}</h3>
                      <Badge variant="outline" className="mb-3">{partner.role}</Badge>
                      <p className="text-gray-600">{partner.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expected Impact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Climate Leadership Development</h4>
                    <p className="text-gray-600">500+ young climate leaders equipped with negotiation and advocacy skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Policy Influence</h4>
                    <p className="text-gray-600">Youth-led policy recommendations presented to government stakeholders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Action</h4>
                    <p className="text-gray-600">Local climate action projects launched in participating communities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Network Building</h4>
                    <p className="text-gray-600">Sustainable youth climate network established across Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757356892992-d8e5ceb4429d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc1OTQxNjg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Environmental sustainability"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}