import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  // Manpower Supply
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    title: 'Certified Engineers',
    category: 'Manpower Supply',
    alt: 'Professional engineers with safety equipment at industrial site'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    title: 'Technical Team',
    category: 'Manpower Supply',
    alt: 'Skilled technicians working on industrial equipment'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&h=600&fit=crop',
    title: 'Skilled Workforce',
    category: 'Manpower Supply',
    alt: 'Diverse team of industrial workers at construction site'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    title: 'Professional Staff',
    category: 'Manpower Supply',
    alt: 'Industrial professionals conducting site inspection'
  },
  
  // Equipment Rental
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    title: 'Heavy Machinery',
    category: 'Equipment Rental',
    alt: 'Construction crane and heavy lifting equipment'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    title: 'Industrial Equipment',
    category: 'Equipment Rental',
    alt: 'Modern industrial machinery and equipment'
  },
  {
    id: 7,
    url: 'https://www.fas-tradingest.com/render.php?type=gallery&id=8',
    title: 'Excavation Fleet',
    category: 'Equipment Rental',
    alt: 'Excavators and heavy earthmoving equipment'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    title: 'Material Handling',
    category: 'Equipment Rental',
    alt: 'Forklifts and warehouse equipment'
  },
  
  // Integrated Contracting
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    title: 'Industrial Complex',
    category: 'Integrated Contracting',
    alt: 'Large scale industrial facility construction'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop',
    title: 'Pipeline Installation',
    category: 'Integrated Contracting',
    alt: 'Industrial pipeline and mechanical systems installation'
  },
  {
    id: 11,
    url: 'https://www.fas-tradingest.com/render.php?type=gallery&id=7',
    title: 'Infrastructure Projects',
    category: 'Integrated Contracting',
    alt: 'Large construction site with multiple cranes and structures'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    title: 'MEP Systems',
    category: 'Integrated Contracting',
    alt: 'Mechanical electrical and plumbing installation work'
  },
  
  // Safety Engineering
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
    title: 'Safety Equipment',
    category: 'Safety Engineering',
    alt: 'Industrial safety helmets and protective gear'
  },
  {
    id: 14,
    url: 'https://www.fas-tradingest.com/render.php?type=gallery&id=5',
    title: 'Safety Training',
    category: 'Safety Engineering',
    alt: 'Workers in safety gear during training session'
  },
  {
    id: 15,
    url: 'https://www.fas-tradingest.com/render.php?type=gallery&id=4',
    title: 'Safety Trained Staff',
    category: 'Safety Engineering',
    alt: 'Safety inspection and compliance documentation'
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
    title: 'PPE Standards',
    category: 'Safety Engineering',
    alt: 'Personal protective equipment and safety gear display'
  }
];






export function ServiceGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState('All');
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

  const categories = ['All', 'Manpower Supply', 'Equipment Rental', 'Integrated Contracting', 'Safety Engineering'];

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <section
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
            <span className="text-emerald-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Service Gallery &
            <span className="block text-emerald-600">Project Highlights</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Explore our portfolio of successful projects demonstrating our expertise across manpower supply,
            equipment rental, and integrated contracting services.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto"></div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group cursor-pointer transform transition-all duration-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${100 + index * 50}ms`
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-48 sm:h-64">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-emerald-300 text-xs sm:text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full transform scale-95 animate-zoomIn max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-emerald-400 transition-colors duration-300 z-10"
            >
              <X className="w-6 sm:w-8 h-6 sm:h-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-4 sm:mt-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">{selectedImage.title}</h3>
              <p className="text-emerald-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{selectedImage.category}</p>
              <p className="text-slate-600 text-sm sm:text-base">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-zoomIn { animation: zoomIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}
