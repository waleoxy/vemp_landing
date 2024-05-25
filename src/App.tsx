import DashboardScreen from './components/dashboard-screen';
import DeliverablesPg from './components/deliverables-pg';
import Footer from './components/footer';
import HeroSectionPage from './components/hero-section';
import HowItWorksPg from './components/how-it-works';
import Launch from './components/launch';
import Contact from './components/modals';
import NavbarComponent from './components/navbar-component';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';

function App() {
  return (
    <main className="relative flex flex-col w-screen h-full overflow-y-auto overflow-x-hidden">
      <NavbarComponent />
      <HeroSectionPage />
      <DashboardScreen />
      <DeliverablesPg />
      <HowItWorksPg />
      <Pricing />
      <Testimonials />
      <Launch />
      <Footer />
      <Contact />
    </main>
  );
}

export default App;
