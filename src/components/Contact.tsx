import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to start your construction project? Contact CMBL Construction for professional 
            consultation and quality construction services. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Discuss Your Project
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                  <a 
                    href="tel:+234-856-849-8752" 
                    className="text-lg text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    +234-856-849-8752
                  </a>
                  <p className="text-gray-600 mt-1">Available for immediate consultation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a 
                    href="mailto:info@cmbl.cc" 
                    className="text-lg text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    info@cmbl.cc
                  </a>
                  <p className="text-gray-600 mt-1">Send us your project details</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <div className="text-gray-700">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose CMBL Construction?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Professional Team</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Quality Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Timely Delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Competitive Pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="flex items-center">
            <div className="w-full bg-gray-900 text-white p-8 lg:p-12 rounded-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start Building?
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Get your free consultation today. Our expert team is ready to discuss your 
                  construction project and provide professional guidance.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+234-856-849-8752"
                    className="block w-full bg-red-600 text-white px-8 py-4 font-bold hover:bg-red-700 transition-colors text-center uppercase tracking-wider"
                  >
                    Call +234-856-849-8752
                  </a>
                  
                  <a 
                    href="mailto:info@cmbl.cc"
                    className="block w-full border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-gray-900 transition-colors text-center uppercase tracking-wider"
                  >
                    Email info@cmbl.cc
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    🏆 Licensed • 🛡️ Insured • ⭐ Trusted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}