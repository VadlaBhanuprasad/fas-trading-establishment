import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Building2 } from 'lucide-react';

export function CallToAction() {
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
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-16 flex flex-col justify-center">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium">
                    Partner With Excellence
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Build
                  <span className="block text-emerald-400">Something Exceptional?</span>
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Join the ranks of Saudi Arabia's leading industrial corporations who trust FAS Trading & Establishment
                  for their most critical projects. Let's discuss how our integrated solutions can drive your success.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:info@fas-tradingest.com"
                    className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400">Email Us</div>
                      <div className="text-white font-semibold text-sm sm:text-base">info@fas-tradingest.com</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>

                  <a
                    href="tel:+966565363194"
                    className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400">Call Us Direct</div>
                      <div className="text-white font-semibold text-sm sm:text-base">+966 56 536 3194</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>

                  <a
                    href="tel:+966571918962"
                    className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400">Alternative Line</div>
                      <div className="text-white font-semibold text-sm sm:text-base">+966 57 191 8962</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400">Visit Our Office</div>
                      <div className="text-white font-semibold text-sm sm:text-base">Al Safat Dist., Al Jubail 35514, Kingdom of Saudi Arabia</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-white">Business Hours:</strong> Sunday - Thursday, 8:00 AM - 5:00 PM (AST)
                    <br />
                    Emergency support available 24/7 for ongoing projects
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-8 sm:p-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-10"></div>

                <div className="relative z-10 text-center">
                  <Building2 className="w-24 h-24 text-white/90 mx-auto mb-8" />
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Why Choose FAS Trading & Establishment?
                  </h3>
                  <div className="space-y-4 text-left max-w-md mx-auto">
                    {[
                      'Proven expertise with Aramco & SABIC projects',
                      'Comprehensive integrated service model',
                      'Strategic location in Al Jubail industrial hub',
                      'Certified and safety-compliant operations',
                      '14+ years of industrial excellence',
                      'Flexible solutions tailored to your needs'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/20">
                    <p className="text-white/90 text-lg font-medium">
                      Let's build the Kingdom's future together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 text-center transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building2 className="w-6 h-6 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-900">FAS Trading & Establishment</span>
          </div>
          <p className="text-slate-600 mb-2">Industrial Excellence Since 2010</p>
          <p className="text-sm text-slate-500">Building the Kingdom's Future, One Project at a Time</p>
        </div>
      </div>
    </section>
  );
}
