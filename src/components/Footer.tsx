import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-2">CMBL</div>
              <div className="text-red-500 font-semibold uppercase tracking-wider text-sm">Construction</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              CMBL Construction is your trusted partner for comprehensive construction services. 
              We deliver quality craftsmanship with professional expertise for residential and 
              commercial projects across Nigeria.
            </p>
            <div className="flex flex-col space-y-3">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Commercial Construction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Residential Construction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Civil Engineering</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Renovation & Remodeling</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Landscaping</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Project Consultation</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CMBL Construction. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-400">
              <span>🏆 Licensed</span>
              <span>🛡️ Insured</span>
              <span>⭐ Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}