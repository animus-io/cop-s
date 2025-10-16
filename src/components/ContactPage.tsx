import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['COP Simulation Pakistan HQ', 'Blue Area, Islamabad, Pakistan', 'Postal Code: 44000'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+92 51 123 4567 (General)', '+92 51 SAFE (7233) (Safeguarding)', '+92 300 123 4567 (WhatsApp)'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@copsimulation.pk', 'apply@copsimulation.pk', 'safeguarding@copsimulation.pk'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How can I apply to the program?',
      answer: 'You can apply through our online application form. Visit the Apply page and select the appropriate category (Participant, Volunteer, or School Partner).'
    },
    {
      question: 'Is there a cost to participate?',
      answer: 'No, participation in COP Simulation Pakistan is completely free for all participants. This includes all training materials, meals during sessions, and the finale event.'
    },
    {
      question: 'What are the age requirements?',
      answer: 'Participants must be between 12-18 years old. Volunteers and mentors can be 18 or older. All participants under 18 require parental consent.'
    },
    {
      question: 'Can I participate if I\'m not from one of the main chapter cities?',
      answer: 'Yes! While we have physical chapters in 5 cities, we also offer virtual participation options for those in other areas of Pakistan.'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', handle: '@COPSimulationPK' },
    { name: 'Instagram', handle: '@copsimulationpk' },
    { name: 'Twitter', handle: '@COPSimPK' },
    { name: 'LinkedIn', handle: 'COP Simulation Pakistan' },
    { name: 'YouTube', handle: 'COP Simulation Pakistan' }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Have questions about COP Simulation Pakistan? We're here to help and would love to hear from you.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>24/7 Safeguarding Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${info.color} mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you have questions about the program, need technical support, or want to explore 
                partnership opportunities, we're here to help.
              </p>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What is your message about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Map & Location</h3>
              <div className="bg-gray-300 h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Islamabad, Pakistan</p>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Visit Our Office</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">COP Simulation Pakistan HQ</p>
                        <p>Blue Area, Islamabad, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                        <p>Sat: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              View Complete FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Our Journey</h2>
          <p className="text-lg text-gray-700 mb-8">
            Stay updated with the latest news, participant stories, and program highlights on our social media channels.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((social, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">
                      {social.name[0]}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">{social.name}</h4>
                  <p className="text-xs text-gray-600">{social.handle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Phone className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency & Safeguarding</h2>
          <p className="text-lg text-gray-700 mb-6">
            For urgent safeguarding concerns or emergencies related to participant safety
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
            <p className="text-2xl font-bold text-red-600 mb-2">+92 51 SAFE (7233)</p>
            <p className="text-sm text-gray-600 mb-4">Available 24/7</p>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Learn About Safeguarding
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}