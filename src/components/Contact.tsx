'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  Building, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Globe,
  Calendar,
  Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@guhaniallc.com",
      secondary: "support@guhaniallc.com",
      description: "Get in touch for general inquiries or support",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      description: "Speak directly with our team",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Innovation Drive",
      secondary: "Boston, MA 02101",
      description: "Our headquarters and main office",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 9AM - 6PM EST",
      secondary: "24/7 Emergency Support",
      description: "We're here when you need us",
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Product Demo",
    "Technical Support",
    "Partnership",
    "Sales Question",
    "Other"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-olive-50 via-white to-orange-25 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-olive-200 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center glass rounded-full px-6 py-3 mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <MessageSquare className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold text-lg">Get In Touch</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold font-display text-olive-900 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Conversation</span>
          </h2>
          <p className={`text-lg text-olive-700 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            Ready to transform your restaurant with cutting-edge technology? We'd love to hear from you. Reach out to discuss your needs and discover how we can help.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index}
                className={`card-hover glass rounded-2xl p-6 bg-gradient-to-br ${info.bgColor} animate-scale-in`}
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-br ${info.color} rounded-full shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-olive-900 mb-2">{info.title}</h3>
                  <p className="text-olive-800 font-semibold mb-1">{info.primary}</p>
                  <p className="text-olive-700 text-sm mb-3">{info.secondary}</p>
                  <p className="text-olive-600 text-xs">{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Contact Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            <div className="glass rounded-3xl p-8 card-hover">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-olive-900 mb-4">Send us a Message</h3>
                <p className="text-olive-700">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-olive-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-olive-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-olive-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-olive-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-olive-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-olive-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-semibold text-olive-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-olive-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-olive-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-olive-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-olive-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-olive-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-semibold text-olive-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-olive-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-olive-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-olive-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-gradient text-white font-semibold py-4 rounded-xl shadow-lg btn-magnetic flex items-center justify-center space-x-3 transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="h-5 w-5" />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
            {/* Quick Actions */}
            <div className="glass rounded-3xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-olive-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl hover:from-orange-100 hover:to-yellow-100 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-olive-900">Schedule a Demo</span>
                  </div>
                  <div className="text-orange-600 group-hover:translate-x-1 transition-transform duration-300">→</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-olive-50 to-green-50 rounded-xl hover:from-olive-100 hover:to-green-100 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-olive-600" />
                    <span className="font-semibold text-olive-900">View Documentation</span>
                  </div>
                  <div className="text-olive-600 group-hover:translate-x-1 transition-transform duration-300">→</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-olive-900">Get Support</span>
                  </div>
                  <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300">→</div>
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="glass rounded-3xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-olive-900 mb-6">Frequently Asked</h3>
              <div className="space-y-4">
                <div className="border-b border-olive-100 pb-4">
                  <h4 className="font-semibold text-olive-900 mb-2">How quickly can we get started?</h4>
                  <p className="text-olive-700 text-sm">Most implementations take 2-4 weeks depending on your requirements.</p>
                </div>
                <div className="border-b border-olive-100 pb-4">
                  <h4 className="font-semibold text-olive-900 mb-2">Do you offer training?</h4>
                  <p className="text-olive-700 text-sm">Yes, we provide comprehensive training for all team members.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-olive-900 mb-2">What support do you provide?</h4>
                  <p className="text-olive-700 text-sm">24/7 technical support with dedicated account management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 