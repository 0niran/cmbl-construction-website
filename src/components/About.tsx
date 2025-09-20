import { Users, Award, Clock, CheckCircle } from 'lucide-react';
import { COMPANY_STATS, COMPANY_VALUES } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';

export default function About() {
  const statsWithIcons = [
    { icon: <Users className="h-6 w-6" />, ...COMPANY_STATS[0] },
    { icon: <Award className="h-6 w-6" />, ...COMPANY_STATS[1] },
    { icon: <Clock className="h-6 w-6" />, ...COMPANY_STATS[2] }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="About Us"
          title="About CMBL Construction"
          subtitle="CMBL Construction is a leading construction company dedicated to delivering exceptional construction services across Nigeria with years of expertise and unwavering commitment to excellence."
          maxWidth="max-w-4xl"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building Excellence Since Day One
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of skilled professionals combines traditional craftsmanship with modern construction 
              techniques to create structures that stand the test of time. From initial planning to final 
              delivery, we ensure every project meets the highest standards of quality and safety.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in both residential and commercial projects, bringing years of expertise 
              and commitment to excellence in every aspect of our work.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Licensed and fully insured construction company</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Experienced team with proven track record</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Commitment to quality and client satisfaction</span>
              </div>
            </div>
          </div>
          
          {/* Company Credentials */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company Credentials</h4>
            <div className="grid grid-cols-1 gap-6">
              {statsWithIcons.map((stat, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Licensed
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Insured
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Trusted
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence in construction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_VALUES.map((value, index) => (
              <div key={index} className="professional-card p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}