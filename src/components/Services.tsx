import { Building, Home, Wrench, Paintbrush, TreePine, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, warehouses, and commercial complexes built to the highest standards with professional project management.",
      features: ["Project Management", "Quality Assurance", "Timely Delivery", "Budget Control"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential developments designed for modern living with attention to detail and quality craftsmanship.",
      features: ["Custom Design", "Quality Materials", "Professional Finish", "Client Collaboration"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Civil Engineering",
      description: "Infrastructure development, road construction, and comprehensive civil engineering solutions for long-lasting structural integrity.",
      features: ["Site Planning", "Infrastructure Design", "Engineering Analysis", "Regulatory Compliance"]
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation and remodeling services that breathe new life into your property.",
      features: ["Interior Design", "Structural Updates", "Modern Upgrades", "Space Optimization"]
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Landscaping",
      description: "Beautiful outdoor spaces and professional landscaping solutions for both residential and commercial properties.",
      features: ["Garden Design", "Hardscaping", "Maintenance Plans", "Sustainable Solutions"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Project Consultation",
      description: "Expert consultation services for construction planning, budgeting, and comprehensive project management from start to finish.",
      features: ["Cost Estimation", "Planning Services", "Risk Assessment", "Technical Guidance"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="section-title">Professional Construction Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            CMBL Construction delivers comprehensive construction solutions with professional expertise, 
            quality craftsmanship, and proven project management for both residential and commercial clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
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
              <a href="tel:+234-856-849-8752" className="btn-secondary">
                Call +234-856-849-8752
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}