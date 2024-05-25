import DashboardScreen from './components/dashboard-screen';
import DeliverablesPg from './components/deliverables-pg';
import Footer from './components/footer';
import Launch from './components/launch';
import Contact from './components/modals';
import NavbarComponent from './components/navbar-component';
import Testimonials from './components/testimonials';
import { HeroPage } from './scroll-pages/hero-page';
import { HowItWorksPage } from './scroll-pages/how-it-works-page';
import { PricingPage } from './scroll-pages/pricing-page';

function App() {
  return (
    <main className="relative flex flex-col w-screen h-full overflow-y-auto overflow-x-hidden">
      <NavbarComponent />
      <HeroPage />
      <DashboardScreen />
      <DeliverablesPg />
      <HowItWorksPage />
      <PricingPage />
      <Testimonials />
      <Launch />
      <Footer />
      <Contact />
    </main>
  );
}

export default App;
