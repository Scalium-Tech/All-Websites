
import React from 'react';
import { BarChart, TrendingUp, Shield, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Advanced Data Analytics',
      description: 'Harness the power of AI to convert vast data sets into insightful visualizations that inform strategy.',
      features: ['Real-time Data Processing', 'Interactive Dashboards', 'Custom KPI Tracking', 'Automated Reporting']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Utilize algorithms to forecast trends and behaviors, empowering businesses to anticipate market changes and adapt proactively.',
      features: ['Market Trend Forecasting', 'Customer Behavior Prediction', 'Revenue Optimization', 'Demand Planning']
    },
    {
      icon: Shield,
      title: 'Risk Assessment Tools',
      description: 'Implement AI-driven models to assess and manage risk effectively, ensuring better decision-making in uncertain environments.',
      features: ['Credit Risk Analysis', 'Market Risk Modeling', 'Fraud Detection', 'Compliance Monitoring']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Develop bespoke analytics solutions tailored to the unique needs of your organization, ensuring personalized insights that drive action.',
      features: ['Tailored AI Models', 'Integration Services', 'Custom APIs', 'Dedicated Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-roboto">
              Our AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of financial analytics services designed to transform your business intelligence and drive strategic growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary hover:border-l-accent">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4 font-roboto">
              Ready to Transform Your Financial Analytics?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our AI solutions can drive your business forward.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
