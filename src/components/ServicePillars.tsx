import { useEffect, useRef, useState } from 'react';
import { Users, Truck, Wrench, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Certified Manpower',
    subtitle: 'Elite Industrial Workforce',
    description: 'Access to Saudi Arabia\'s most qualified industrial professionals, specifically trained and certified for high-stakes Aramco and SABIC projects.',
    features: [
      'Certified engineers with specialized industrial credentials',
      'Experienced supervisors with proven project management expertise',
      'Highly skilled technicians trained in latest industry standards',
      'Full compliance with Saudi Aramco and SABIC requirements',
      'Continuous professional development programs',
      'Safety-certified personnel with impeccable track records'
    ],
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Truck,
    title: 'Heavy Equipment Fleet',
    subtitle: 'Comprehensive Rental Solutions',
    description: 'State-of-the-art heavy equipment fleet available for flexible rental terms, designed to meet the demanding needs of large-scale industrial projects.',
    features: [
      'Heavy lifting cranes with capacities up to 500 tons',
      'Industrial forklifts for material handling operations',
      'Modern earthmovers and excavation equipment',
      'Flexible daily or monthly rental agreements',
      'Fully maintained and inspected equipment',
      'Emergency deployment and 24/7 technical support'
    ],
    gradient: 'from-amber-600 to-orange-600'
  },
  {
    icon: Wrench,
    title: 'Integrated Contracting',
    subtitle: 'End-to-End Project Management',
    description: 'Comprehensive contracting services that manage every phase of your project from conception to completion, with specialized expertise in safety-critical environments.',
    features: [
      'Civil construction with advanced engineering solutions',
      'Mechanical systems installation and maintenance',
      'Electrical infrastructure and power systems',
      'Specialized safety engineering protocols',
      'Project planning and execution management',
      'Quality assurance and regulatory compliance'
    ],
    gradient: 'from-emerald-600 to-teal-600'
  }
];

export function ServicePillars() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Service Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            The Three Pillars of
            <span className="block text-emerald-600">Industrial Excellence</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto px-2">
            Our integrated service model delivers comprehensive solutions across every aspect of industrial operations,
            ensuring seamless project execution from start to finish.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mt-5 sm:mt-6"></div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`bg-gradient-to-br ${pillar.gradient} p-6 sm:p-8 md:p-12 text-white flex flex-col justify-center`}>
                    <div className="mb-4 sm:mb-6">
                      <pillar.icon className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 opacity-90" />
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{pillar.title}</h3>
                      <p className="text-base sm:text-lg opacity-90 font-medium">{pillar.subtitle}</p>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-lg">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 md:p-12">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center">
                      <span className="w-6 sm:w-8 h-6 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600" />
                      </span>
                      Key Capabilities
                    </h4>
                    <ul className="space-y-3 sm:space-y-4">
                      {pillar.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3 group"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed group-hover:text-emerald-600 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-2xl transform transition-all duration-1000 delay-600 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Our proven expertise has made us the preferred partner for Aramco, SABIC, and other major industrial corporations
            throughout Saudi Arabia. When precision, safety, and reliability matter most, industry leaders choose FAS Trading & Establishment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-xs sm:text-sm">
              Saudi Aramco Projects
            </span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-xs sm:text-sm">
              SABIC Facilities
            </span>
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-xs sm:text-sm">
              Industrial Complexes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
