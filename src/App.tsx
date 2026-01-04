import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ServicePillars } from './components/ServicePillars';
import { ServiceGallery } from './components/ServiceGallery';
import { MissionValues } from './components/MissionValues';
import { CallToAction } from './components/CallToAction';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <ServicePillars />
      <ServiceGallery />
      <MissionValues />
      <CallToAction />
    </div>
  );
}

export default App;
