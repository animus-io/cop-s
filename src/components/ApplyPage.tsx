import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Upload, User, Heart, Building, Shield } from 'lucide-react';

export function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    chapter: '',
    school: '',
    guardianName: '',
    guardianContact: '',
    essay: '',
    parentalConsent: false,
    mediaConsent: false,
    organization: '',
    experience: '',
    availability: ''
  });

  const chapters = [
    { id: 'lahore', name: 'Lahore - Air Quality & Urban Sustainability' },
    { id: 'karachi', name: 'Karachi - Coastal Climate Resilience' },
    { id: 'quetta', name: 'Quetta - Water Scarcity & Desert Adaptation' },
    { id: 'peshawar', name: 'Peshawar - Renewable Energy & Green Infrastructure' },
    { id: 'gilgit', name: 'Gilgit-Baltistan - Glacial Melt & Mountain Ecosystems' }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you within 5 business days.');
  };

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apply to COP Simulation Pakistan 2025
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Join 500+ young climate advocates across Pakistan in shaping our climate future
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-vibrant-green" />
              <span>Completely Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-sky-blue" />
              <span>Safe & Supervised</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-coral-orange" />
              <span>Parental Consent Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="participant" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="participant" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Participant (12-18)</span>
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Volunteer/Mentor</span>
              </TabsTrigger>
              <TabsTrigger value="partner" className="flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span>School Partner</span>
              </TabsTrigger>
            </TabsList>

            {/* Participant Application */}
            <TabsContent value="participant" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Participant Application</h2>
                    <p className="text-gray-600">
                      For young people aged 12-18 interested in joining the COP Simulation program
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Select onValueChange={(value) => handleInputChange('age', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your age" />
                          </SelectTrigger>
                          <SelectContent>
                            {[12, 13, 14, 15, 16, 17, 18].map(age => (
                              <SelectItem key={age} value={age.toString()}>{age} years</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Your city"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="chapter">Preferred Chapter *</Label>
                        <Select onValueChange={(value) => handleInputChange('chapter', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a chapter" />
                          </SelectTrigger>
                          <SelectContent>
                            {chapters.map(chapter => (
                              <SelectItem key={chapter.id} value={chapter.id}>
                                {chapter.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="school">School/Institution *</Label>
                      <Input
                        id="school"
                        value={formData.school}
                        onChange={(e) => handleInputChange('school', e.target.value)}
                        placeholder="Name of your school or educational institution"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="guardianName">Parent/Guardian Name *</Label>
                        <Input
                          id="guardianName"
                          value={formData.guardianName}
                          onChange={(e) => handleInputChange('guardianName', e.target.value)}
                          placeholder="Name of parent or guardian"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="guardianContact">Parent/Guardian Contact *</Label>
                        <Input
                          id="guardianContact"
                          value={formData.guardianContact}
                          onChange={(e) => handleInputChange('guardianContact', e.target.value)}
                          placeholder="Phone number or email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="essay">Why do you want to join COP Simulation Pakistan? *</Label>
                      <Textarea
                        id="essay"
                        value={formData.essay}
                        onChange={(e) => handleInputChange('essay', e.target.value)}
                        placeholder="Tell us about your interest in climate action and what you hope to achieve through this program (200-500 words)"
                        rows={6}
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Share your passion for climate action and goals for the program
                      </p>
                    </div>

                    {/* File Upload Section */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Parental Consent Form</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Download, print, and have your parent/guardian sign the consent form, then upload it here
                        </p>
                        <div className="space-y-2">
                          <Button variant="outline" type="button">
                            <Upload className="w-4 h-4 mr-2" />
                            Choose File
                          </Button>
                          <div>
                            <Button variant="link" type="button" className="text-blue-600 text-sm">
                              Download Consent Form (PDF)
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Consent Checkboxes */}
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="parentalConsent"
                          checked={formData.parentalConsent}
                          onCheckedChange={(checked) => handleInputChange('parentalConsent', checked as boolean)}
                        />
                        <div className="flex-1">
                          <Label htmlFor="parentalConsent" className="text-sm font-medium">
                            I confirm that my parent/guardian has given consent for my participation *
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">
                            This is required for all participants under 18 years of age
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="mediaConsent"
                          checked={formData.mediaConsent}
                          onCheckedChange={(checked) => handleInputChange('mediaConsent', checked as boolean)}
                        />
                        <div className="flex-1">
                          <Label htmlFor="mediaConsent" className="text-sm font-medium">
                            I consent to photos/videos being taken for program documentation
                          </Label>
                          <p className="text-xs text-gray-600 mt-1">
                            These may be used for program promotion and reporting (optional)
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-vibrant-green hover:bg-green-600 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      disabled={!formData.parentalConsent}
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Volunteer Application */}
            <TabsContent value="volunteer" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Volunteer/Mentor Application</h2>
                    <p className="text-gray-600">
                      For experienced individuals who want to support and mentor young participants
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          placeholder="Your age"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization/Institution</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Your current organization or institution"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Relevant Experience *</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder="Describe your experience in climate action, education, or youth mentoring"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="availability">Availability *</Label>
                      <Textarea
                        id="availability"
                        value={formData.availability}
                        onChange={(e) => handleInputChange('availability', e.target.value)}
                        placeholder="When are you available to volunteer? (days, times, duration)"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-medium text-blue-900 mb-2">Background Check Required</h3>
                      <p className="text-sm text-blue-700">
                        All volunteers working with minors must complete a background check as part of our 
                        safeguarding policy. This will be arranged after your application is approved.
                      </p>
                    </div>

                    <Button type="submit" className="w-full bg-sky-blue hover:bg-blue-600 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      Submit Volunteer Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Partner Application */}
            <TabsContent value="partner" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">School Partnership Application</h2>
                    <p className="text-gray-600">
                      For schools and educational institutions interested in partnering with the program
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="school">School/Institution Name *</Label>
                        <Input
                          id="school"
                          value={formData.school}
                          onChange={(e) => handleInputChange('school', e.target.value)}
                          placeholder="Official name of your institution"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City/Location *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="School location"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Contact Person Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Primary contact person"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="guardianContact">Contact Information *</Label>
                        <Input
                          id="guardianContact"
                          value={formData.guardianContact}
                          onChange={(e) => handleInputChange('guardianContact', e.target.value)}
                          placeholder="Email and phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="essay">Partnership Interest *</Label>
                      <Textarea
                        id="essay"
                        value={formData.essay}
                        onChange={(e) => handleInputChange('essay', e.target.value)}
                        placeholder="Describe your school's interest in the program and how you envision the partnership"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-medium text-green-900 mb-2">Partnership Benefits</h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Priority enrollment for your students</li>
                        <li>• Teacher training workshops</li>
                        <li>• Curriculum integration support</li>
                        <li>• Recognition as official program partner</li>
                      </ul>
                    </div>

                    <Button type="submit" className="w-full bg-coral-orange hover:bg-orange-600 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      Submit Partnership Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Important Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Application Deadlines</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Early Bird:</strong> February 15, 2025</li>
                  <li>• <strong>Regular:</strong> March 1, 2025</li>
                  <li>• <strong>Final Deadline:</strong> March 15, 2025</li>
                  <li>• <strong>Results:</strong> March 22, 2025</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Selection Criteria</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Age requirements (12-18 for participants)</li>
                  <li>• Complete application with all documents</li>
                  <li>• Parental consent (for minors)</li>
                  <li>• Demonstrated interest in climate action</li>
                  <li>• Commitment to full program participation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}