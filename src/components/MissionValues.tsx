import { useEffect, useRef, useState } from 'react';
import { Shield, Lightbulb, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Quality',
    description: 'Unwavering commitment to excellence in every project, meeting and exceeding international standards and client expectations.',
    color: 'bg-blue-600'
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Zero-compromise approach to safety engineering, ensuring the protection of personnel, assets, and the environment in all operations.',
    color: 'bg-red-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous adoption of cutting-edge technologies and methodologies to deliver superior solutions for evolving industrial challenges.',
    color: 'bg-amber-600'
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description: 'Building lasting partnerships through transparent communication, reliable delivery, and dedicated support that exceeds expectations.',
    color: 'bg-emerald-600'
  }
];

export function MissionValues() {
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
      id="values"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Mission & Values</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Driven by Purpose,
            <span className="block text-emerald-600">Guided by Principles</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto"></div>
        </div>

        <div
          className={`bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl p-6 sm:p-12 md:p-16 mb-12 sm:mb-16 shadow-2xl transform transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed mb-6 sm:mb-8 px-2">
              To be the cornerstone of Saudi Arabia's industrial success by delivering integrated,
              world-class solutions that combine certified expertise, cutting-edge equipment, and
              uncompromising safety standards.
            </p>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed px-2">
              We empower our clients to achieve their most ambitious projects through seamless execution,
              innovative problem-solving, and an unwavering dedication to quality that sets the benchmark
              for industrial excellence in the Kingdom.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-1000 delay-${(index + 3) * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-slate-50 rounded-xl p-5 sm:p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${value.color} w-12 sm:w-16 h-12 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            {
              stat: '100%',
              label: 'Safety Compliance',
              description: 'Perfect safety record across all projects'
            },
            {
              stat: '24/7',
              label: 'Client Support',
              description: 'Round-the-clock assistance and emergency response'
            },
            {
              stat: 'ISO',
              label: 'Certified Standards',
              description: 'International quality management certifications'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-5xl font-bold text-emerald-600 mb-1 sm:mb-2">{item.stat}</div>
              <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">{item.label}</div>
              <div className="text-xs sm:text-sm text-slate-600">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
