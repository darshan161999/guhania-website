'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Shield, 
  GraduationCap,
  Coffee,
  Plane,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Star,
  Award
} from 'lucide-react';

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support",
      color: "from-red-100 to-pink-100",
      iconColor: "text-red-500"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs",
      color: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-500"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy",
      color: "from-yellow-100 to-orange-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: Plane,
      title: "Travel & Perks",
      description: "Travel allowance, team retreats, and exclusive restaurant partnerships",
      color: "from-green-100 to-teal-100",
      iconColor: "text-green-500"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries, equity options, and performance bonuses",
      color: "from-purple-100 to-violet-100",
      iconColor: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Security & Stability",
      description: "401(k) matching, life insurance, and long-term disability coverage",
      color: "from-gray-100 to-slate-100",
      iconColor: "text-gray-600"
    }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      experience: "5+ years",
      description: "Join our engineering team to build next-generation restaurant technology solutions. You'll work on scalable systems that power thousands of restaurants worldwide.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong understanding of database design and optimization",
        "Experience with microservices architecture"
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with product and design teams",
        "Mentor junior developers and conduct code reviews",
        "Optimize application performance and user experience",
        "Participate in architectural decisions and technical planning"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York / Remote",
      type: "Full-time",
      salary: "$110k - $160k",
      experience: "3+ years",
      description: "Lead product strategy and execution for our restaurant management platform. Drive innovation and ensure our products meet the evolving needs of restaurant owners.",
      requirements: [
        "3+ years of product management experience",
        "Experience in B2B SaaS or restaurant technology",
        "Strong analytical and problem-solving skills",
        "Excellent communication and leadership abilities",
        "Data-driven approach to product decisions"
      ],
      responsibilities: [
        "Define product roadmap and strategy",
        "Conduct market research and competitive analysis",
        "Work closely with engineering and design teams",
        "Gather and prioritize customer feedback",
        "Drive product launches and go-to-market strategies"
      ],
      featured: false
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Los Angeles / Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for restaurant owners and their customers. Help shape the future of restaurant technology through thoughtful design.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Strong portfolio showcasing design process",
        "Experience with user research and testing",
        "Understanding of responsive and mobile design"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with product and engineering teams",
        "Ensure consistent brand experience across products"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago / Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      experience: "2+ years",
      description: "Help restaurant owners succeed with our platform. Build relationships, drive adoption, and ensure customer satisfaction throughout their journey.",
      requirements: [
        "2+ years in customer success or account management",
        "Experience in SaaS or restaurant industry preferred",
        "Excellent communication and interpersonal skills",
        "Problem-solving mindset and customer-first attitude",
        "Ability to work with technical and non-technical stakeholders"
      ],
      responsibilities: [
        "Onboard new customers and ensure successful implementation",
        "Build and maintain strong customer relationships",
        "Identify opportunities for account growth and expansion",
        "Provide product training and ongoing support",
        "Collaborate with sales and product teams on customer feedback"
      ],
      featured: false
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Star, value: "4.8/5", label: "Employee Rating" },
    { icon: Award, value: "95%", label: "Retention Rate" },
    { icon: Zap, value: "3x", label: "Growth Rate" }
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

  const toggleJob = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section id="careers" ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-olive-25 to-orange-25 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-80 h-80 bg-olive-200 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center glass rounded-full px-6 py-3 mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Briefcase className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold text-lg">Join Our Team</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold font-display text-olive-900 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Restaurant Technology</span>
          </h2>
          <p className={`text-lg text-olive-700 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            Join a passionate team of innovators, creators, and problem-solvers who are revolutionizing the restaurant industry through cutting-edge technology.
          </p>
        </div>

        {/* Company Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card-hover glass rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-2xl text-olive-900">{stat.value}</p>
                  <p className="text-sm font-semibold text-olive-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-olive-900 mb-4">Why Work With Us?</h3>
            <p className="text-lg text-olive-700">We believe in taking care of our team with comprehensive benefits and a supportive culture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className={`card-hover glass rounded-2xl p-6 bg-gradient-to-br ${benefit.color} animate-scale-in`}
                  style={{animationDelay: `${1 + index * 0.1}s`}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white/80 rounded-full shadow-lg flex-shrink-0">
                      <Icon className={`h-6 w-6 ${benefit.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-olive-900 mb-2">{benefit.title}</h4>
                      <p className="text-olive-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Job Listings */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-olive-900 mb-4">Open Positions</h3>
            <p className="text-lg text-olive-700">Discover exciting opportunities to grow your career with us</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <div 
                key={job.id}
                className={`glass rounded-2xl overflow-hidden card-hover ${job.featured ? 'ring-2 ring-orange-300' : ''}`}
              >
                {/* Job Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-xl font-bold text-olive-900">{job.title}</h4>
                        {job.featured && (
                          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-olive-600">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedJob === job.id ? (
                        <ChevronDown className="h-6 w-6 text-olive-600 transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="h-6 w-6 text-olive-600 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-olive-100">
                    <div className="pt-6 space-y-6">
                      <div>
                        <h5 className="font-semibold text-olive-900 mb-2">About the Role</h5>
                        <p className="text-olive-700">{job.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-olive-900 mb-3">Requirements</h5>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm text-olive-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-olive-900 mb-3">Responsibilities</h5>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm text-olive-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="btn-gradient text-white font-semibold px-6 py-3 rounded-full shadow-lg btn-magnetic">
                          Apply Now
                        </button>
                        <button className="glass text-olive-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white/30 btn-magnetic">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.8s'}}>
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-olive-900 mb-4">Don't See the Perfect Role?</h3>
            <p className="text-olive-700 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let's start a conversation.
            </p>
            <button className="btn-gradient text-white font-semibold px-8 py-4 rounded-full shadow-xl btn-magnetic">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers; 