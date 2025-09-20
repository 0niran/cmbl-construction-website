import { Building, Home, Wrench, Paintbrush, TreePine, ShieldCheck } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Services() {
  const serviceIcons = [
    <Building key="building" className="h-8 w-8" />,
    <Home key="home" className="h-8 w-8" />,
    <Wrench key="wrench" className="h-8 w-8" />,
    <Paintbrush key="paintbrush" className="h-8 w-8" />,
    <TreePine key="treepine" className="h-8 w-8" />,
    <ShieldCheck key="shieldcheck" className="h-8 w-8" />
  ];

  const servicesWithIcons = SERVICES.map((service, index) => ({
    ...service,
    icon: serviceIcons[index]
  }));

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Services"
          title="Professional Construction Services"
          subtitle="CMBL Construction delivers comprehensive construction solutions with professional expertise, quality craftsmanship, and proven project management for both residential and commercial clients."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesWithIcons.map((service, index) => (
            <div key={index} className="professional-card p-8 h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact CMBL Construction today for professional consultation and quality construction services. 
              Our experienced team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get Started Today
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="btn-secondary">
                Call {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}