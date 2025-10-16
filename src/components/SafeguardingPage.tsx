import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Shield, Users, AlertTriangle, Phone, Mail, CheckCircle, Lock, Heart } from 'lucide-react';

interface SafeguardingPageProps {
  onNavigate: (page: string) => void;
}

export function SafeguardingPage({ onNavigate }: SafeguardingPageProps) {
  const [reportForm, setReportForm] = useState({
    reporterName: '',
    reporterContact: '',
    incidentType: '',
    description: '',
    anonymous: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setReportForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', reportForm);
    alert('Report submitted successfully. Our safeguarding team will investigate immediately.');
    setReportForm({
      reporterName: '',
      reporterContact: '',
      incidentType: '',
      description: '',
      anonymous: false
    });
  };

  const safeguardingPrinciples = [
    {
      icon: Shield,
      title: 'Child Protection First',
      description: 'The safety and wellbeing of all participants is our highest priority',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'We create spaces where all young people feel valued, respected, and safe',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Lock,
      title: 'Zero Tolerance',
      description: 'Any form of abuse, harassment, or discrimination is strictly prohibited',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Heart,
      title: 'Supportive Community',
      description: 'We foster positive relationships and provide support when needed',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const policies = [
    {
      title: 'Code of Conduct',
      description: 'Clear behavioral expectations for all participants, volunteers, and staff',
      points: [
        'Treat everyone with respect and dignity',
        'Maintain appropriate boundaries in all interactions',
        'Report any concerns or inappropriate behavior immediately',
        'Follow all program rules and guidelines'
      ]
    },
    {
      title: 'Adult Supervision',
      description: 'Trained adults supervise all activities and interactions',
      points: [
        'Background-checked volunteers and staff',
        'Adult-to-youth ratios maintained at all times',
        'No one-on-one interactions without supervision',
        'Regular safeguarding training for all adults'
      ]
    },
    {
      title: 'Digital Safety',
      description: 'Protecting participants in online spaces and digital communications',
      points: [
        'Monitored online platforms and communications',
        'Clear guidelines for social media and digital interactions',
        'Privacy protection for all participant information',
        'Cyberbullying prevention and response protocols'
      ]
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Safeguarding & Child Protection
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Creating a safe, inclusive, and supportive environment for all participants
          </p>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Aligned with Save the Children's Global Safeguarding Standards
          </Badge>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Safeguarding Principles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect of our program is designed with child safety and protection in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeguardingPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card key={principle.title} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-full ${principle.color} mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safeguarding Policies</h2>
            <p className="text-lg text-gray-600">
              Comprehensive policies ensure the safety and wellbeing of all participants
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{policy.title}</h3>
                  <p className="text-gray-600 mb-4">{policy.description}</p>
                  <ul className="space-y-2">
                    {policy.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Consent */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Parental/Guardian Consent</h2>
            <p className="text-lg text-gray-600">
              Active parental involvement is essential for participant safety and program success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Consent is Required</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Legal requirement for participation of minors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ensures parents are informed about program activities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Provides emergency contact information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Establishes communication channels with families</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Program details and schedule</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Safety protocols and supervision arrangements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Photography and media consent options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Emergency contact procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Download Consent Form (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Reporting Mechanism */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report a Concern</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you have any concerns about participant safety or inappropriate behavior, 
              please report it immediately using the options below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-red-200">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">+92 51 SAFE (7233)</p>
                <p className="text-sm text-gray-600">Available 24/7 for urgent concerns</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Report</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">safeguarding@copsimulation.pk</p>
                <p className="text-sm text-gray-600">For non-urgent concerns</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Report Form</h3>
              <Alert className="mb-6">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  All reports are taken seriously and investigated promptly. You can submit reports anonymously 
                  if you prefer. Your safety and the safety of all participants is our priority.
                </AlertDescription>
              </Alert>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reporterName">Your Name (Optional)</Label>
                    <Input
                      id="reporterName"
                      value={reportForm.reporterName}
                      onChange={(e) => handleInputChange('reporterName', e.target.value)}
                      placeholder="Leave blank for anonymous report"
                    />
                  </div>
                  <div>
                    <Label htmlFor="reporterContact">Contact Information (Optional)</Label>
                    <Input
                      id="reporterContact"
                      value={reportForm.reporterContact}
                      onChange={(e) => handleInputChange('reporterContact', e.target.value)}
                      placeholder="Email or phone (for follow-up)"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="incidentType">Type of Concern</Label>
                  <Input
                    id="incidentType"
                    value={reportForm.incidentType}
                    onChange={(e) => handleInputChange('incidentType', e.target.value)}
                    placeholder="e.g., inappropriate behavior, safety concern, policy violation"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description of Concern *</Label>
                  <Textarea
                    id="description"
                    value={reportForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Please provide as much detail as possible about the incident or concern"
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Participants</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Participant Rights & Responsibilities</Button></li>
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">How to Report Concerns</Button></li>
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Support Services Directory</Button></li>
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Digital Safety Guidelines</Button></li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Parents & Guardians</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Complete Safeguarding Policy</Button></li>
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Parent/Guardian Guide</Button></li>
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Communication Protocols</Button></li>
                  <li>• <Button variant="link" className="p-0 h-auto text-blue-600">Emergency Procedures</Button></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}