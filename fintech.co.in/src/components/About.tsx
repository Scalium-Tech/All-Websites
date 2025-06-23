
import React from 'react';
import { Brain, Target, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Brain, value: '500+', label: 'AI Models Deployed' },
    { icon: Target, value: '99%', label: 'Accuracy Rate' },
    { icon: Users, value: '200+', label: 'Clients Served' },
    { icon: Award, value: '50+', label: 'Industry Awards' }
  ];

  return (
    <section id="about" className="py-20 bg-lightGray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-roboto">
              Revolutionizing Financial Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At FinTech Analytics, we are at the forefront of revolutionizing the financial landscape through cutting-edge AI solutions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary font-roboto">
                Bridging Technology and Finance
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                At FinTech Analytics, we are at the forefront of revolutionizing the financial landscape. Our unique AI solutions analyze vast amounts of data, uncovering patterns and insights that enable businesses to make informed decisions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We offer a suite of services tailored for finance leaders looking to enhance their operational efficiency and strategic foresight. By bridging the gap between technology and finance, we help our clients navigate a rapidly changing market environment, ensuring they remain competitive and profitable.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                  AI-Powered
                </span>
                <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold">
                  Data-Driven
                </span>
                <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                  Future-Ready
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                alt="Financial Analytics Technology"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-lg flex items-center justify-center">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
