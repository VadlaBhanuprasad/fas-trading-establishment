import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, ArrowRight, Building2, MessageCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';

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
      className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-3">
              
              {/* Contact Form - First on mobile */}
              <div className="order-1 lg:order-2 p-4 sm:p-6 lg:p-8">
                <ContactForm />
              </div>

              {/* Contact Info - Second on mobile */}
              <div className="order-2 lg:order-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4 lg:mb-6">
                  <span className="px-3 py-1 lg:px-4 lg:py-2 bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-300 text-xs lg:text-sm font-medium">
                    Partner With Excellence
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                  Ready to Build
                  <span className="block text-emerald-400">Something Exceptional?</span>
                </h2>

                <p className="text-sm lg:text-base text-slate-300 leading-relaxed mb-6 lg:mb-8">
                  Join Saudi Arabia's leading industrial corporations who trust FAS Trading & Establishment.
                </p>

                <div className="space-y-3 lg:space-y-4">
                  <a
                    href="mailto:info@fas-tradingest.com?subject=Business Inquiry - FAS Trading & Establishment"
                    className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400">Email Us</div>
                      <div className="text-white font-semibold text-sm truncate">info@fas-tradingest.com</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <a
                    href="tel:+966565363194"
                    className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-400">Call Direct</div>
                      <div className="text-white font-semibold text-sm">+966 56 536 3194</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://api.whatsapp.com/send/?phone=966565363194&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-400">WhatsApp</div>
                      <div className="text-white font-semibold text-sm">Start Chat</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-xs lg:text-sm">
                    <strong className="text-white">Hours:</strong> Sun-Thu, 8AM-5PM (AST)
                  </p>
                </div>
              </div>

              {/* Why Choose Us - Third on mobile */}
              <div className="order-3 lg:order-3 p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-emerald-600 to-teal-600 relative">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-10"></div>
                
                <div className="relative z-10 text-center">
                  <Building2 className="w-12 h-12 lg:w-20 lg:h-20 text-white/90 mx-auto mb-4 lg:mb-6" />
                  <h3 className="text-lg lg:text-2xl font-bold text-white mb-4">
                    Why Choose FAS?
                  </h3>
                  <div className="space-y-2 lg:space-y-3 text-left max-w-xs mx-auto">
                    {[
                      'Aramco & SABIC expertise',
                      'Integrated solutions',
                      'Al Jubail location',
                      '14+ years excellence'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-white/90 text-xs lg:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 lg:mt-12 text-center transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center space-x-2 lg:space-x-3 mb-2 lg:mb-4">
            <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600" />
            <span className="text-lg lg:text-2xl font-bold text-slate-900">FAS Trading & Establishment</span>
          </div>
          <p className="text-slate-600 text-sm lg:text-base mb-1 lg:mb-2">Industrial Excellence Since 2010</p>
          <p className="text-xs lg:text-sm text-slate-500">Building the Kingdom's Future, One Project at a Time</p>
        </div>
      </div>
    </section>
  );
}