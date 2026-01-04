import { useEffect, useRef, useState } from 'react';
import { MapPin, Award, TrendingUp } from 'lucide-react';

export function ExecutiveSummary() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Executive Summary</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
            Powering Saudi Arabia's
            <span className="block text-emerald-600">Industrial Transformation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial Excellence"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8" />
                  <div>
                    <div className="font-bold text-lg">Al Jubail</div>
                    <div className="text-sm text-emerald-100">Strategic Location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Since 2010, <strong className="text-emerald-600">FAS Trading & Establishment</strong> has been at the forefront of Saudi Arabia's industrial revolution, delivering unparalleled expertise and resources to the Kingdom's most critical infrastructure projects.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Strategically headquartered in <strong>Al Jubail</strong>—the heart of Saudi Arabia's petrochemical industry—we serve as the trusted partner for <strong>Aramco, SABIC,</strong> and other industry leaders who demand nothing less than excellence.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  title: 'Industry Leadership',
                  description: 'Certified and compliant with the highest Saudi industrial standards'
                },
                {
                  icon: TrendingUp,
                  title: 'Proven Track Record',
                  description: 'Consistent delivery of complex projects on time and within budget'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl transform transition-all duration-1000 delay-600 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Our Strategic Advantage
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We don't just provide services—we forge partnerships that drive the Kingdom's Vision 2030 forward.
              Our integrated approach combines world-class certified manpower, a comprehensive heavy equipment fleet,
              and end-to-end contracting capabilities, all backed by an unwavering commitment to safety and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
