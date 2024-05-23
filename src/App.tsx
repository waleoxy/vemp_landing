import DashboardScreen from './components/dashboard-screen';
import DeliverablesPg from './components/deliverables-pg';
import Footer from './components/footer';
import HeroSectionPage from './components/hero-section';
import HowItWorksPg from './components/how-it-works';
import Launch from './components/launch';
import NavbarComponent from './components/navbar-component';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';

function App() {
  return (
    <main className="flex flex-col w-screen h-full overflow-y-auto">
      <NavbarComponent />
      <HeroSectionPage />
      <DashboardScreen />
      <DeliverablesPg />
      <HowItWorksPg />
      <Pricing />
      <Testimonials />
      <Launch />
      <Footer />
    </main>
  );
}

export default App;
