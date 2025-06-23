
import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 data-point opacity-30" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 data-point opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 data-point opacity-35" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 left-1/3 w-32 data-line opacity-20" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-24 data-line opacity-25" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-roboto mb-6 leading-tight">
              Transform Financial Decisions with{' '}
              <span className="text-accent">AI-Powered Insights</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
              Unlock the Future of Finance with Data-Driven Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 text-lg group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <BarChart3 className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-200 text-sm">Transform complex data into actionable insights</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <TrendingUp className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Predictive Modeling</h3>
              <p className="text-gray-200 text-sm">Forecast trends and market behaviors</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
              <p className="text-gray-200 text-sm">AI-driven models for effective risk assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
