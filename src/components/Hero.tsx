import { Building2, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70 z-10"></div>
        
        {/* Construction Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Company Badge */}
              <div className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full mb-8">
                <Building2 className="h-5 w-5 mr-2" />
                <span className="font-semibold text-sm uppercase tracking-wider">Professional Construction</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">CMBL</span>
                <br />
                <span className="text-red-500">Construction</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Building Excellence Through Professional Construction Services. Your Trusted Partner for Quality Projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#contact" 
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
              
              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                <a 
                  href="tel:+234-856-849-8752" 
                  className="flex items-center hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 mr-3 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">+234-856-849-8752</span>
                </a>
                <a 
                  href="mailto:info@cmbl.cc" 
                  className="flex items-center hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 mr-3 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">info@cmbl.cc</span>
                </a>
              </div>
            </div>
            
            {/* Right side - Professional stats */}
            <div className="lg:justify-self-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-8 text-center">Why Choose CMBL?</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">5+</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">Support</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                    <span>🏆 Licensed</span>
                    <span>•</span>
                    <span>🛡️ Insured</span>
                    <span>•</span>
                    <span>⭐ Trusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Bar */}
      <section className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white text-sm font-medium uppercase tracking-wider">
            <span>🏢 Commercial Construction</span>
            <span className="hidden sm:inline">•</span>
            <span>🏠 Residential Projects</span>
            <span className="hidden sm:inline">•</span>
            <span>🛣️ Civil Engineering</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">🎨 Renovations</span>
          </div>
        </div>
      </section>
    </>
  );
}